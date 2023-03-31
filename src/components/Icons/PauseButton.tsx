import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";

import "./PauseButton.scss";


interface PauseButtonProps{
    handleClick: () => void
}
export const PauseButton: FC<PauseButtonProps> = ({handleClick}) => {
  return (
    <Button className="pause-button" onClick={handleClick}>
      <Box className="line" />
      <Box className="line" />
    </Button>
  );
};
