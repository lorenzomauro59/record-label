"use client";

import React from "react";

const Video = () => {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XarwOLDx15o?si=yFm5QsMi7paEFXdy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <style jsx>{`
        .video-container {
          display: flex;
          justify-content: center;
          align-items: center;
          weight: 100vw;
          min-height: 100vh;
          background-color: black;
        }

        iframe {
          width: 100%; // Ajusta el tamaño del video según tus necesidades
          height: 100%; // Ajusta el tamaño del video según tus necesidades
        }
      `}</style>
    </div>
  );
};

export default Video;
