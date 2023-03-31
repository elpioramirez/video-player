import {FC, useState, useRef, LegacyRef, useEffect, useCallback, useMemo} from "react";
import {Box, Button} from "@chakra-ui/react";
import { VideoNavBar } from "./VideoNavBar";

import "./VideoPlayer.scss";
import {PlayIcon} from "./Icons/PlayIcon";
import {ReplayIcon} from "./Icons/ReplayIcon";


interface VideoPlayerProps{
  source: string
}

export interface IDuration {
  decimal: number,
  hours: number,
  minutes: number,
  seconds: number
}
export const VideoPlayer: FC<VideoPlayerProps> = ({source}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<IDuration>({
    decimal: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [duration, setDuration] = useState<IDuration>({
    decimal: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>();

  const togglePlay = () => {
    if(videoRef.current){
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }

  useEffect(()=>{
    if(videoRef.current){
      const durationDecimal = Math.round(videoRef.current.duration);
      let hours =0 ;
      let minutes = 0;
      if(durationDecimal > 3600){
        hours = Math.floor(durationDecimal/3600);
      }
      if(durationDecimal > 60){
        minutes = Math.floor((durationDecimal - hours * 3600) / 60);
      }
      const seconds = durationDecimal - hours * 3600 - minutes * 60;
      setDuration({
        decimal: durationDecimal,
        hours,
        minutes,
        seconds
      });
    }
  },[videoRef.current?.duration]);

  const isFinished = useMemo(()=>{
    return duration.decimal === progress.decimal;
  },[duration, progress]);

  useEffect(()=>{
    if(isFinished){
      setIsPlaying(false);
    }
  },[isFinished]);

  const handleProgress = useCallback(() => {
    if(videoRef.current){
      const currentDecimalTime:number = Math.round(videoRef.current?.currentTime);
      let hours =0 ;
      let minutes = 0;
      if(currentDecimalTime > 3600){
        hours = Math.floor(currentDecimalTime/3600);
      }
      if(currentDecimalTime > 60){
        minutes = Math.floor((currentDecimalTime - hours * 3600) / 60);
      }
      const seconds = currentDecimalTime - hours * 3600 - minutes * 60;
      setProgress({
        decimal: currentDecimalTime,
        hours,
        minutes,
        seconds
      });
    }
  },[videoRef.current]);

  const handleVolume = useCallback((newVolume: number) => {
    if(videoRef.current){
      videoRef.current.volume = newVolume;
      setVolume(newVolume * 100);
    }
  },[videoRef.current]);

  const handleReplay = useCallback(()=>{
    if(videoRef.current){
      videoRef.current.load();
      setIsPlaying(true);
    }
  },[videoRef.current])

  return (
    <Box className="video-container">
      {!isPlaying && !isFinished ? <Button className="video-icon-button" onClick={togglePlay} ><PlayIcon /></Button> : null}
      {isFinished ? <Button className="video-icon-button" onClick={handleReplay} ><ReplayIcon /></Button> : null}
      <video
        className="video-player"
        onTimeUpdate={handleProgress}
        ref={videoRef as LegacyRef<HTMLVideoElement> }
        autoPlay={true}
      >
        <source
          src={source}
          type="video/mp4"
        />
      </video>
      <Box className="video-nav-bar">
        <VideoNavBar
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          volume={volume}
          setVolume={handleVolume}
        />
      </Box>
    </Box>
  );
};
