import { useContext, useEffect } from "react";
import React from "react";
import Featured from "../../components/featured/Featured";
import { Context } from "../../contextPage";
import ReactLoading from "react-loading";

const Series = () => {
  const {
    loading,
    newSeries,
    topRatedSeries,
    popularSeries,
    fetchNewSeries,
    fetchPopularTv,
    fetchTopRatedSeries,
  } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNewSeries();
    fetchPopularTv();
    fetchTopRatedSeries();
  }, []);

  return (
    <div className="series x-padding x-margin">
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
          <Featured title="latest series" data={newSeries} />
          <Featured title="popular series" data={popularSeries} />
          <Featured title="Top-rated series" data={topRatedSeries} />
        </>
      )}
    </div>
  );
};

export default Series;
