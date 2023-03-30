import { Flex } from "@chakra-ui/react";
import { VideoPlayer } from "./components/VideoPlayer";

export default function App() {
  return (
    <Flex flexDir="column" gap="10px">
      <VideoPlayer />
    </Flex>
  );
}
