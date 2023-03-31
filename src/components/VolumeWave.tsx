import {FC, useMemo} from "react";
import {Box} from "@chakra-ui/react";

import './VolumeWave.scss'

interface VolumeWaveProps{
    volume: number
}
export const VolumeWave: FC<VolumeWaveProps> = ({volume}) => {

    const display = useMemo(()=>{

        if(volume == 0) {
            return <Box className="silence" />
        }
        return (
            <Box className="circle">
                <Box
                    className="arc"
                    style={{
                        width: "1.75rem",
                        height: "0.75rem",
                    }}
                />
                {volume > 50 ? (<Box
                    className="arc"
                    style={{
                        width: "2.5rem",
                        height: "1.5rem",
                    }}
                />) : null}
            </Box>
        );
    }, [volume])


    return (
            <Box className="volume-wave-container">
                {display}
            </Box>
    );
}