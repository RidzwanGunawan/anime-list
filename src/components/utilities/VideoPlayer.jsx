"use client";

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: 350,
    height: 250,
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-left bg-color-dark hover:bg-color-primary hover:text-color-dark transition-all px-2 mb-1"
        >
          <X size={24} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, Please try another.")}
        />
      </div>
    );
  };

  const OpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-2 right-3 w-32 bg-color-dark text-color-primary text-xl hover:bg-color-primary hover:text-color-dark transition-all shadow-xl rounded-sm"
      >
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <OpenTrailer />;
};

export default VideoPlayer;
