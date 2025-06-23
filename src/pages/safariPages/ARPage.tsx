import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { arScenes } from "../../data/ARScenes";
import { Notification } from "../../components/Notification";
import "./ARPage.css";
import { InfoIcon } from "lucide-react";
import CaptureButton from "../../components/CaptureButton";
import { useNavigation } from "../../context/NavigationContext";
import { useAllowLandscape } from "../../utils/theming";

const ARPage: React.FC = () => {
  useAllowLandscape();
  const { id } = useParams();
  const sceneId = id ? parseInt(id, 10) : null;
  const currentScene = arScenes.find((scene) => scene.id === sceneId);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [streamStarted, setStreamStarted] = useState(false);

  const { sectionTheme } = useNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            setStreamStarted(true);
          };
        }
      } catch (err) {
        console.error("Error accessing camera", err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Get actual and visible dimensions
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const { width: displayWidth, height: displayHeight } = video.getBoundingClientRect();

    canvas.width = displayWidth;
    canvas.height = displayHeight;

    const videoAspect = videoWidth / videoHeight;
    const displayAspect = displayWidth / displayHeight;

    let sx = 0, sy = 0, sWidth = videoWidth, sHeight = videoHeight;

    if (videoAspect > displayAspect) {
      sWidth = videoHeight * displayAspect;
      sx = (videoWidth - sWidth) / 2;
    } else {
      sHeight = videoWidth / displayAspect;
      sy = (videoHeight - sHeight) / 2;
    }

    context.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/png");

    requestAnimationFrame(() => {
      navigate("/safariPages/ar-result", {
        state: {
          image,
          sceneId,
        },
      });
    });
  };

  if (!currentScene) return <div>Scene not found</div>;

  return (
    <div className="ar-page-container">
      <div className="ar-scene">
        <video ref={videoRef} className="ar-video" muted playsInline />
        <canvas ref={canvasRef} style={{ display: "none" }} />

        <div className="content-notif">
          <Notification
            icon={<InfoIcon />}
            heading="Capture the moment"
            description={currentScene.notificationText}
          />
        </div>

        <div className="ar-focus-box" />

        <CaptureButton
          className="ar-capture-button"
          color={`var(${sectionTheme.background})`}
          onClick={captureImage}
        />

        <div className="ar-top-buttons">
          <BackButton to={currentScene.previousPage} />
        </div>

        {!streamStarted && (
          <div className="ar-loading-overlay">
            <div>📷 Loading camera...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ARPage;
