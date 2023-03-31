import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";

import "./PlayButton.scss";


interface PlayButtonProps{
    handleClick: () => void
}
export const PlayButton: FC<PlayButtonProps> = ({handleClick}) => {
    return (
        <Button className="play-button" onClick={handleClick}>
            <Box className="triangle" />
        </Button>
    );
};