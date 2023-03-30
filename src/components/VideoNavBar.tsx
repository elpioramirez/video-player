import { FC, CSSProperties } from "react";
import { Box } from "@chakra-ui/react";
import { PauseButton } from "./PauseButton";

const VideoNavBarStyle: CSSProperties = {
  display: "flex"
};

export const VideoNavBar: FC = ({ togglePlay, isPlaying, progress }) => {
  return (
    <Box style={VideoNavBarStyle}>
      <PauseButton />
      <button onClick={togglePlay}>
                            {isPlaying ? "Pause" : "Play"}
                        
      </button>
                      
      <progress value={progress} max="100" />
    </Box>
  );
};
