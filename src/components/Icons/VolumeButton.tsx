import {ChangeEvent, ChangeEventHandler, FC, useState} from "react";
import { Box, Button } from "@chakra-ui/react";

import "./VolumeButton.scss";
import {VolumeWave} from "./VolumeWave";


interface VolumeButtonProps{
    setVolume: (volume: number) => void,
    volume: number
}
export const VolumeButton: FC<VolumeButtonProps> = ({setVolume, volume}) => {

    const [displaySlider, setDisplaySlider] = useState<boolean>(false);
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setVolume(parseInt(e.currentTarget.value) / 100);
    }
    return (
        <Box
            className="volume-container"
            onMouseLeave={()=> setDisplaySlider(false)}
            onMouseEnter={()=> setDisplaySlider(true)}
        >
            <Button className="volume-icon" >
                <Box className="rectangle" />
                <Box className="triangle" />
                <VolumeWave volume={volume} />
            </Button>

            {displaySlider ? <input type="range" className="volume-slider" onChange={handleChange} value={volume}/> : null}
        </Box>

    );
};