import { FC } from "react";
import { Box, Button } from "@chakra-ui/react";

import "./PauseButton.scss";

export const PauseButton: FC = () => {
  return (
    <Button>
      <Box color="red" className="line" />
      <Box color="red" className="line" />
    </Button>
  );
};
