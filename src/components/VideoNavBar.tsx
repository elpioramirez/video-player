import {FC, CSSProperties, useMemo} from "react";
import { Box } from "@chakra-ui/react";
import { PauseButton } from "./PauseButton";
import { PlayButton } from "./PlayButton";
import {VolumeButton} from "./VolumeButton";
import {IDuration} from "./VideoPlayer";

const VideoNavBarStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: "0 0.3rem 0.3rem 0.3rem",
};

const ProgressStyle: CSSProperties = {
    zIndex: "100",
    height: "0.25rem",
    display: "flex",
    width: "100%",
    color: "red"
};

const ButtonBarStyle: CSSProperties = {
    display: "flex",
    backgroundColor: "#000000",
    opacity: "0.5",
    height: "1.5rem",
    justifyContent: "space-between",
    borderBottomLeftRadius: "1rem 50%",
    borderBottomRightRadius: "1rem 50%",
    padding: "0 3rem"
};

const ButtonGroupStyle: CSSProperties = {
    display: "flex",
    width: "30%",
    opacity: "1",
    color: "white",
    alignItems: "center"
}

interface VideoNavBarProps {
    duration: IDuration,

    togglePlay: () => void,
    isPlaying: boolean,
    progress: IDuration,
    setVolume: (volume: number) => void,
    volume: number,
}
export const VideoNavBar: FC<VideoNavBarProps> = ({ duration, togglePlay, isPlaying, progress, setVolume, volume }) => {

    const currentProgress: number = useMemo(()=>{
        return (progress.decimal / duration.decimal) * 100 || 0;
    },[progress, duration])
    return (
        <Box style={VideoNavBarStyle}>
            <progress style={ProgressStyle} value={currentProgress} max="100" />
            <Box style={ButtonBarStyle}>
                <Box style={ButtonGroupStyle}>
                    {isPlaying ? <PauseButton handleClick={togglePlay}/> : <PlayButton handleClick={togglePlay}/> }
                    <VolumeButton setVolume={setVolume} volume={volume}/>
                </Box>
                <Box style={{...ButtonGroupStyle, justifyContent: "center"}}>
                    {String(progress.hours).padStart(2, '0')}:{String(progress.minutes).padStart(2, '0')}:{String(progress.seconds).padStart(2, '0')} / {String(duration.hours).padStart(2, '0')}:{String(duration.minutes).padStart(2, '0')}:{String(duration.seconds || 0).padStart(2, '0')}
                </Box>
                <Box style={{...ButtonGroupStyle, justifyContent: "flex-end"}}>
                </Box>
            </Box>

        </Box>
    );
};
