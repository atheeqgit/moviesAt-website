import React from "react";
import { useParams } from "react-router-dom";

const Player = () => {
  const params = useParams();
  const id = params.id;

  const getSmashystreamUrl = (tmdbID) => {
    return `https://embed.smashystream.com/playere.php?tmdb=${tmdbID}`;
  };
  const getSuperembedUrl = (tmdbID) => {
    return `https://multiembed.mov/directstream.php?video_id=${tmdbID}&tmdb=1`;
  };
  const get2embedUrl = (tmdbID) => {
    return `https://www.2embed.cc/embed/${tmdbID}`;
  };
  return (
    <div className="frame-div">
      <iframe
        allowFullScreen
        className="frame"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          overflow: "show",
        }}
        src={getSmashystreamUrl(id)}
      ></iframe>
    </div>
  );
};

export default Player;
