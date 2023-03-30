import { FC, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { VideoNavBar } from "./VideoNavBar";

import "./VideoPlayer.scss";

export const VideoPlayer: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  return (
    <Box className="video-container">
      <video
        className="video-player"
        onTimeUpdate={handleProgress}
        ref={videoRef}
      >
                        
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
                    
      </video>
      <Box className="video-nav-bar">
        <VideoNavBar
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          progress={progress}
        />
      </Box>
    </Box>
  );
};
