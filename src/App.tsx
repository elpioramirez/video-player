import { Flex } from "@chakra-ui/react";
import { VideoPlayer } from "./components/VideoPlayer";

enum VideoList {
    NASA = "https://d34w7g4gy10iej.cloudfront.net/video/1211/DOD_100629732/DOD_100629732-486x274-300k.mp4",
    SHORT = "https://static.videezy.com/system/resources/previews/000/045/482/original/20_14_02.mp4",
    CARTOON = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
}
export default function App() {
    return (
        <Flex flexDir="column" gap="10px">
            <VideoPlayer source={VideoList.SHORT} />
        </Flex>
    );
}
