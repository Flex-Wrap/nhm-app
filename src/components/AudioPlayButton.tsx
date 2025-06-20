import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import "./AudioPlayButton.css";
import WaveSurfer from "wavesurfer.js";

type AudioPlayButtonProps = {
  src: string;
};

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
};

const AudioPlayButton: React.FC<AudioPlayButtonProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("0:00");
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#A8B778",
      progressColor: "#252D0D",
      height: 48,
      barWidth: 2,
      cursorWidth: 0,
    });

    wavesurfer.current = ws;

    ws.load(src);

    const handleReady = () => {
      const total = ws.getDuration();
      setDuration(formatTime(total));
    };

    const handleFinish = () => {
      setIsPlaying(false);
    };

    ws.on("ready", handleReady);
    ws.on("finish", handleFinish);

    return () => {
      ws.un("ready", handleReady);
      ws.un("finish", handleFinish);
      ws.destroy();
    };
  }, [src]);

  const togglePlay = () => {
    const ws = wavesurfer.current;
    if (!ws) return;

    if (ws.isPlaying()) {
      ws.pause();
      setIsPlaying(false);
    } else {
      ws.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="audio-player">
      <button onClick={togglePlay} className="audio-button">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <div className="waveform" ref={waveformRef}></div>
      <p className="duration">{duration}</p>
    </div>
  );
};

export default AudioPlayButton;