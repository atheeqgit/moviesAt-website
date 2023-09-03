import React from "react";
import Axios from "axios";
import "./featured.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featured = (props) => {
  // {featuredMen ? (
  //     <Carousel responsive={featuredResponsive}>
  //       {featuredMen.map((data, index) => {
  //         return <Product key={index} data={data} />;
  //       })}
  //     </Carousel>
  //   ) : (
  //     "loading...."
  //   )}

  const array = [
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
    "oppen.png",
  ];

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
      <h2>{props.title}</h2>
      {array ? (
        <Carousel responsive={featuredResponsive}>
          {array.map((data, index) => {
            return (
              <div
                className="card"
                key={index}
                style={{
                  backgroundImage: `url(/${data})`,
                }}
              >
                0{" "}
              </div>
            );
          })}
        </Carousel>
      ) : (
        "loading...."
      )}
    </div>
  );
};

export default Featured;
