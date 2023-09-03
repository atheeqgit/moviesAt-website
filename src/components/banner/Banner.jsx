import React from "react";
import "./banner.css";
// import { Outlet, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { bannerData, BannerResponsive, brandData } from "../../../data/data";

const Banner = () => {
  //import { useNavigate } from "react-router-dom";
  // const navigate = useNavigate();

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
        {<Ban />}
        {<Ban />}
        {<Ban />}
      </Carousel>
    </div>
  );
};

const Ban = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(/Extraction-2.jpg)`,
      }}
    >
      <div className="overlay">
        <div className="banner-content">
          <h1>Extraction 2</h1>
          <div className="banner-infos">
            <div className="pg-box box">pG-18</div>
            <div className="hd-box box">hd</div>
            <p>comedy , fantasy</p>
            <div className="date-time">
              <MdOutlineDateRange /> 27-02-2023
            </div>
            <div className="date-time">
              <MdOutlineDateRange /> 115min
            </div>
          </div>
          <div className="banner-btns">
            <div className="banner-btn">
              <BsPlayCircle />
              save to list
            </div>
            <div className="banner-btn">
              <BsPlayCircle />
              Watch now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
