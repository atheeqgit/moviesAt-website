import React from "react";
import Axios from "axios";
import "./featured.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../card/Card";

const Featured = ({ title, data }) => {
  // {featuredMen ? (
  //     <Carousel responsive={featuredResponsive}>
  //       {featuredMen.map((data, index) => {
  //         return <Product key={index} data={data} />;
  //       })}
  //     </Carousel>
  //   ) : (
  //     "loading...."
  //   )}

  const featuredResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="featured-div">
      <h2>{title}</h2>
      {data ? (
        <Carousel responsive={featuredResponsive}>
          {data.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </Carousel>
      ) : (
        "loading...."
      )}
    </div>
  );
};

export default Featured;
