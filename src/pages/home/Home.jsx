import React from "react";
import Banner from "../../components/banner/Banner";
import "./home.css";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Featured title="trending" />
      <Featured title="latest movies" />
      <Featured title="popular movies" />
      <Featured title="latest series" />
    </div>
  );
};

export default Home;
