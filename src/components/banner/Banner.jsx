import React from "react";
import "./banner.css";
// import { Outlet, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Banner = ({ data }) => {
  const navigate = useNavigate();

  const BannerResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const slicedData = data.slice(0, 8);

  return (
    <div className="banner-div">
      <Carousel
        responsive={BannerResponsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {slicedData.map((item) => {
          return (
            <div
              className="banner"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
              }}
            >
              <div className="overlay">
                <div className="banner-content">
                  <h1>{item.name ? item.name : item.title}</h1>
                  <p className="description">{item.overview}</p>
                  <div className="banner-infos">
                    <div className="pg-box box">
                      {item.adult ? "pg-18" : "pg-12"}
                    </div>
                    <div className="hd-box box">
                      {item.media_type == "movie" ? "movie" : "series"}
                    </div>
                    {/* <p>comedy , fantasy</p> */}
                    <div className="date-time">
                      <MdOutlineDateRange />{" "}
                      {item.first_air_date
                        ? item.first_air_date
                        : item.release_date}
                    </div>
                    {/* <div className="date-time">
                      <MdOutlineDateRange /> 115min
                    </div> */}
                  </div>
                  <div className="banner-btns">
                    <div className="banner-btn">
                      <BsPlayCircle />
                      save to list
                    </div>
                    <div
                      className="banner-btn"
                      onClick={() => {
                        navigate(
                          `/selected/${item.release_date ? "movie" : "tv"}/${
                            item.id
                          }`
                        );
                      }}
                    >
                      <BsPlayCircle />
                      Watch now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
