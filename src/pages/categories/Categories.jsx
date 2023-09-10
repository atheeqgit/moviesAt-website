import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./categories.css";
import { Context } from "../../contextPage";
import axios from "axios";
import Card from "../../components/card/Card";
import ReactLoading from "react-loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Categories = () => {
  const [type, setType] = useState("movie");
  const {
    genre,
    activeGenre,
    setActiveGenre,
    fetchGenre,
    fetchByGenre,
    genreResults,
    page,
    setPage,
    totalPage,
    setTotalPage,
  } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchByGenre(type);
    setPage(1);
  }, [activeGenre]);

  useEffect(() => {
    setActiveGenre("");
    fetchGenre(type); // Fetching Genres on Initial Render.
    fetchByGenre(type);
    setPage(1);
  }, [type]);

  useEffect(() => {
    fetchByGenre(type);
  }, [page]);

  return (
    <div className="genre-page x-margin x-padding">
      {genre && genreResults ? (
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
            {genre.map((genre) => {
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
            })}
          </div>

          <InfiniteScroll
            className="genre-grid"
            dataLength={genreResults.length} //This is important field to render the next data
            next={() => {
              setPage(page + 1);
              fetchByGenre(type);
            }}
            hasMore={page < totalPage}
            loader={
              <ReactLoading
                type={"spinningBubbles"}
                color={"#45ff16"}
                height={"5rem"}
                width={"5rem"}
              />
            }
            scrollThreshol={0.9}
            style={{ overflow: "hidden" }}
          >
            {genreResults?.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
          </InfiniteScroll>
        </>
      ) : (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#45ff16"}
          height={"5rem"}
          width={"5rem"}
        />
      )}
    </div>
  );
};

export default Categories;
