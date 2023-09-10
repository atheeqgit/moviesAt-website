import { useContext, useEffect } from "react";
import React from "react";
import Featured from "../../components/featured/Featured";
import { Context } from "../../contextPage";
import ReactLoading from "react-loading";

const Movies = () => {
  const {
    loading,
    fetchAll,
    fetchLatest,
    fetchPopular,
    fetchPopularTv,
    latestMovies,
    trendingAll,
    popularMovies,
  } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchAll();
    fetchLatest();
    fetchPopular();
    fetchPopularTv();
  }, []);

  return (
    <div className="movies x-padding x-margin">
      {loading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#45ff16"}
          height={"15rem"}
          width={"15rem"}
          className="x-margin x-padding"
        />
      ) : (
        <>
          <Featured title="trending" data={trendingAll} />
          <Featured title="latest movies" data={latestMovies} />
          <Featured title="popular movies" data={popularMovies} />
        </>
      )}
    </div>
  );
};

export default Movies;
