import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/selected/${data.release_date ? "movie" : "tv"}/${data.id}`);
      }}
      style={{
        backgroundImage: `url(${
          data.poster_path
            ? "https://image.tmdb.org/t/p/original" + data.poster_path
            : "/profile-not-found.png"
        })`,
      }}
    ></div>
  );
};

export default Card;
