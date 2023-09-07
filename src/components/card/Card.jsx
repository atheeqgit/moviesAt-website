import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import ReactLoading from "react-loading";
import { Context } from "../../contextPage";

const Card = ({ data }) => {
  const { loading } = useContext(Context);
  const navigate = useNavigate();
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
                : "/profile-not-found.png"
            })`,
          }}
        ></div>
      )}
    </>
  );
};

export default Card;
