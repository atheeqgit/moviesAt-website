import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./categories.css";
import { Context } from "../../contextPage";
import axios from "axios";
import Card from "../../components/card/Card";
import ReactLoading from "react-loading";

const Categories = () => {
  const [type, setType] = useState("movie");
  const {
    genre,
    setGenre,
    activeGenre,
    setActiveGenre,
    fetchGenre,
    fetchByGenre,
    genreResults,
    loading,
  } = useContext(Context);

  useEffect(() => {
    fetchGenre(type); // Fetching Genres on Initial Render.
    setActiveGenre("");
  }, [type]);

  useEffect(() => {
    fetchByGenre(type); // Fetching Genres on Initial Render.
  }, [activeGenre]);
  useEffect(() => {
    fetchByGenre(type); // Fetching Genres on Initial Render.
  }, [type]);

  return (
    <div className="genre-page x-margin x-padding">
      {loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#45ff16"}
          height={"5rem"}
          width={"5rem"}
        />
      ) : (
        <>
          <div className="type-select">
            <div
              className={type == "movie" ? "type type-active" : "type"}
              onClick={() => {
                setType("movie");
              }}
            >
              Movie
            </div>
            <div
              className={type == "tv" ? "type type-active" : "type"}
              onClick={() => {
                setType("tv");
              }}
            >
              Shows
            </div>
          </div>

          <div className="genre-info">
            {loading ? (
              <ReactLoading
                type={"spinningBubbles"}
                color={"#45ff16"}
                height={"5rem"}
                width={"5rem"}
              />
            ) : (
              genre.map((genre) => {
                return (
                  <div
                    className={
                      activeGenre == genre.id ? "genre genre-active" : "genre"
                    }
                    id={genre.id}
                    onClick={() => {
                      if (activeGenre == genre.id) {
                        setActiveGenre(0);
                      } else {
                        setActiveGenre(genre.id);
                      }
                    }}
                  >
                    {genre.name}
                  </div>
                );
              })
            )}
          </div>
          <div className="genre-grid">
            {genreResults ? (
              genreResults.map((item, index) => {
                return <Card data={item} key={index} />;
              })
            ) : (
              <ReactLoading
                type={"spinningBubbles"}
                color={"#45ff16"}
                height={"5rem"}
                width={"5rem"}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
