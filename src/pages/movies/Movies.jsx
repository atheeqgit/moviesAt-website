import { useContext, useEffect } from "react";
import React from "react";
import Featured from "../../components/featured/Featured";
import { Context } from "../../contextPage";

const Movies = () => {
  const {
    fetchAll,
    fetchLatest,
    fetchPopular,
    fetchPopularTv,
    latestMovies,
    trendingAll,
    popularMovies,
  } = useContext(Context);

  useEffect(() => {
    fetchAll();
    fetchLatest();
    fetchPopular();
    fetchPopularTv();
  }, []);

  return (
    <div className="movies x-padding x-margin">
      <Featured title="trending" data={trendingAll} />
      <Featured title="latest movies" data={latestMovies} />
      <Featured title="popular movies" data={popularMovies} />
    </div>
  );
};

export default Movies;
