import { useContext, useEffect } from "react";
import React from "react";
import Featured from "../../components/featured/Featured";
import { Context } from "../../contextPage";

const Series = () => {
  const {
    newSeries,
    topRatedSeries,
    popularSeries,
    fetchNewSeries,
    fetchPopularTv,
    fetchTopRatedSeries,
  } = useContext(Context);

  useEffect(() => {
    fetchNewSeries();
    fetchPopularTv();
    fetchTopRatedSeries();
  }, []);

  return (
    <div className="series x-padding x-margin">
      <Featured title="latest series" data={newSeries} />
      <Featured title="popular series" data={popularSeries} />
      <Featured title="Top-rated series" data={topRatedSeries} />
    </div>
  );
};

export default Series;
