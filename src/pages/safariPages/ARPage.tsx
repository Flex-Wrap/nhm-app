import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { arScenes } from "../../data/ARScenes";
import { Notification } from "../../components/Notification";
import "./ARPage.css";
import { InfoIcon } from "lucide-react";
import CaptureButton from "../../components/CaptureButton";
import { useNavigation } from "../../context/NavigationContext";
import { ArrowDownIcon, RefreshCcw } from "lucide-react";

const ARPage: React.FC = () => {
  const { id } = useParams();
  const sceneId = id ? parseInt(id, 10) : null;
  const currentScene = arScenes.find((scene) => scene.id === sceneId);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [streamStarted, setStreamStarted] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const { sectionTheme } = useNavigation();

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

            if (canvasRef.current && videoRef.current) {
              canvasRef.current.width = videoRef.current.videoWidth;
              canvasRef.current.height = videoRef.current.videoHeight;
            }
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

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Match canvas to video
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL("image/png");

    // Ensure draw completes before switching layout
    requestAnimationFrame(() => {
      setCapturedImage(image);
    });
  };

  const resetCapture = () => {
    setCapturedImage(null);
  };

  if (!currentScene) return <div>Scene not found</div>;

  return (
    <div className="ar-page-container">
      {/* Camera Layout */}
      <div className={`ar-scene ${capturedImage ? "hidden" : ""}`}>
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

      {/* Captured Image Layout */}
      <div className={`captured-layout ${capturedImage ? "" : "hidden"}`}>
        {capturedImage && (
          <>
            <img
              src={capturedImage}
              alt="Captured"
              className="captured-image"
            />
            <div className="captured-controls">
              <button
                className="retake-button"
                onClick={resetCapture}
                style={{ backgroundColor: `var(${sectionTheme.background})` }}
              >
                <ArrowDownIcon size={42} />
              </button>
              <button
                className="retake-button"
                onClick={resetCapture}
                style={{ backgroundColor: `var(${sectionTheme.background})` }}
              >
                <RefreshCcw size={42} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ARPage;
