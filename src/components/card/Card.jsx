import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import ReactLoading from "react-loading";
import { Context } from "../../contextPage";

const Card = ({ data }) => {
  const { loading } = useContext(Context);
  const navigate = useNavigate();

  function color(rating) {
    if (rating > 7) {
      return "#45ff16";
    } else if (rating > 5) {
      return "yellow";
    } else {
      return "red";
    }
  }
  return (
    <>
      {loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#45ff16"}
          height={"5rem"}
          width={"5rem"}
        />
      ) : (
        <div
          className="card"
          loading="lazy"
          onClick={() => {
            navigate(
              `/selected/${data.release_date ? "movie" : "tv"}/${data.id}`
            );
          }}
          style={{
            backgroundImage: `url(${
              data.poster_path
                ? "https://image.tmdb.org/t/p/original" + data.poster_path
                : "/img-not-found.png"
            })`,
          }}
        >
          <div
            className="card-rating"
            style={{
              color: `${color(data.vote_average)}`,
              border: `2px solid ${color(data.vote_average)}`,
            }}
          >
            {data.vote_average.toFixed(1)}
          </div>
          <p className="card-title">{data.name ? data.name : data.title}</p>
        </div>
      )}
    </>
  );
};

export default Card;
