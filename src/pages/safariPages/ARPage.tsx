import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { HomeButton } from "../../components/HomeButton";
import { arScenes } from "../../data/ARScenes";
import { Notification } from "../../components/Notification";
import "./ARPage.css";
import { InfoIcon } from "lucide-react";
import CaptureButton from "../../components/CaptureButton";
import { useNavigation } from "../../context/NavigationContext"; // adjust path if needed

const ARPage: React.FC = () => {
  const { id } = useParams();
  const sceneId = id ? parseInt(id, 10) : null;
  const currentScene = arScenes.find((scene) => scene.id === sceneId);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [streamStarted, setStreamStarted] = useState(false);

  const { sectionTheme } = useNavigation();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setStreamStarted(true);
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
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        const image = canvasRef.current.toDataURL("image/png");
        console.log("Captured image:", image);
      }
    }
  };

  if (!currentScene) return <div>Scene not found</div>;

  return (
    <div className="ar-scene">
      <video ref={videoRef} className="ar-video" muted playsInline />

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ display: "none" }}
      />

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
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
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
  );
};

export default ARPage;
