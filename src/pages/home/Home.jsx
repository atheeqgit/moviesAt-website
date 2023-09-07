import React, { useEffect, useState, useContext } from "react";
import Banner from "../../components/banner/Banner";
import "./home.css";
import axios from "axios";
import ReactLoading from "react-loading";
import Featured from "../../components/featured/Featured";
import { Context } from "../../contextPage";

const Home = () => {
  const {
    fetchAll,
    fetchLatest,
    fetchPopular,
    fetchPopularTv,
    popularMovies,
    popularSeries,
    latestMovies,
    trendingAll,
    loading,
  } = useContext(Context);

  useEffect(() => {
    fetchAll();
    fetchLatest();
    fetchPopular();
    fetchPopularTv();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#45ff16"}
          height={"5rem"}
          width={"5rem"}
        />
      ) : (
        <>
          <Banner data={trendingAll} />
          <div className="x-padding">
            <Featured title="trending" data={trendingAll} />
            <Featured title="latest movies" data={latestMovies} />
            <Featured title="popular movies" data={popularMovies} />
            <Featured title="latest series" data={popularSeries} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
