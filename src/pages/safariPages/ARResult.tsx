import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Notification } from "../../components/Notification";
import { arScenes } from "../../data/ARScenes";
import * as tmImage from "@teachablemachine/image";
import { ContinueButton } from "../../components/ContinueButton";
import { RetakeButton } from "../../components/RetakeButton";
import { useAllowLandscape } from "../../utils/theming";
import "./ARResult.css";
import { useNavigation } from "../../context/NavigationContext";
import { RememberButton } from "../../components/RememberButton";

const MODEL_URL = "https://teachablemachine.withgoogle.com/models/rM4lfitvI/";

const ARResult: React.FC = () => {
  const { sectionTheme } = useNavigation();

  useAllowLandscape();
  const location = useLocation();
  const { image, sceneId } = location.state || {};

  const [isLion, setIsLion] = useState<boolean | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  const scene = arScenes.find((s) => s.id === sceneId);

  useEffect(() => {
    let isCancelled = false;

    const loadModelAndPredict = async () => {
      try {
        setIsLion(null); // Reset state before re-analysis

        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";
        const model = await tmImage.load(modelURL, metadataURL);

        const img = new Image();
        img.src = image;

        img.onload = async () => {
          if (isCancelled) return;

          const predictions = await model.predict(img);
          const lionExhibit = predictions.find(
            (p) => p.className === "Lion Exhibit"
          );

          setIsLion(
            lionExhibit !== undefined && lionExhibit.probability > 0.85
          );
        };
      } catch (error) {
        console.error("Error loading model or predicting", error);
        if (!isCancelled) setIsLion(false);
      }
    };

    if (image) {
      loadModelAndPredict();
    }

    return () => {
      isCancelled = true;
    };
  }, [image]);

  if (!image || !scene) return <div>Something went wrong. Try again.</div>;

  const handleRememberClick = () => {
    setShowVideo(true);
    // Delay showing Continue button to avoid ghost click
    setTimeout(() => {
      setCanContinue(true);
    }, 100);
  };

  return (
    <div className="ar-result-page">
      <div className="content-notif">
        <Notification
          icon={null}
          heading={
            isLion === null
              ? "Analyzing..."
              : isLion
              ? scene.successText
              : scene.failText
          }
          description={
            isLion === null
              ? "Checking your image..."
              : isLion
              ? scene.notificationText
              : "Try capturing the lion exhibit again."
          }
        />
      </div>

      {!showVideo && (
        <img src={image} alt="Captured" className="captured-image" />
      )}

      {showVideo && (
        <video
          className="lion-video"
          autoPlay
          muted
          playsInline
          onEnded={() => {}}
        >
          <source src={scene.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {isLion !== null && (
        <div className="ar-result-controls">
          {isLion ? (
            showVideo ? (
              canContinue ? (
                <ContinueButton to={scene.nextPage} text="Continue" />
              ) : null
            ) : (
              <RememberButton
                onClick={handleRememberClick}
                text="Remember"
              />
            )
          ) : (
            <RetakeButton to={`/safariPages/ar/${scene.id}`} text="Try Again" />
          )}
        </div>
      )}
    </div>
  );
};

export default ARResult;
