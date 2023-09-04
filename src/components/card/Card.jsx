import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/selected/${data.id}`);
      }}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`,
      }}
    ></div>
  );
};

export default Card;
