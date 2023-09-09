import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../contextPage";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPlayCircle } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "./selected.css";
import axios from "axios";
import Featured from "../../components/featured/Featured";
import ReactLoading from "react-loading";

const Selected = () => {
  const castResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1000, min: 620 },
      items: 7,
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 4,
    },
  };
  const {
    options,
    latestMovies,
    fetchPopular,
    fetchLatest,
    fetchPopularTv,
    popularMovies,
    popularSeries,
    topRatedSeries,
    fetchTopRatedSeries,
  } = useContext(Context);

  const params = useParams();
  const id = params.id;
  const type = params.type;

  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async (id, type) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
        options
      );
      setMovieDetails(response.data);
      setGenre(response.data.genres);
      fetchCast();
      setLoading(false);

      //  fetchVideo();
    } catch (err) {
      console.log(err);
    }
  };

  const APIKEY = "8beb64d8cd001db70a05c61378be3461";

  const [castData, setCastdata] = useState([]);

  const fetchCast = async () => {
    const castdata = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${APIKEY}&language`
    );
    const castdetail = await castdata.json();
    setCastdata(castdetail.cast.slice(0, 15));
    //setLoader(false);
  };
  const [genre, setGenre] = useState();

  function color() {
    if (movieDetails.vote_average > 7) {
      return "#45ff16";
    } else if (movieDetails.vote_average > 5) {
      return "yellow";
    } else {
      return "red";
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDetail(id, type);
  }, [id]);

  useEffect(() => {
    if (type == "movie") {
      fetchPopular();
      fetchLatest();
    } else {
      fetchPopularTv();
      fetchTopRatedSeries();
    }
  }, [type]);
  return (
    <div className="selected">
      {loading ? (
        <ReactLoading
          className="x-padding x-margin"
          type={"spinningBubbles"}
          color={"#45ff16"}
          height={"5rem"}
          width={"5rem"}
        />
      ) : (
        <>
          <div
            className="selected-img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
            }}
          >
            <div
              className="selected-overlay"
              style={{
                backgroundImage: `url(/selected-overlay2.png)`,
                minHeight: "90vh",
              }}
            ></div>
          </div>
          <div className="selected-content ">
            <div className="selected-poster">
              <img
                src={`${
                  movieDetails?.poster_path
                    ? "https://image.tmdb.org/t/p/original" +
                      `${movieDetails?.poster_path}`
                    : "/img-not-found.png"
                }`}
              />
            </div>
            <div className="banner-content">
              <h1>
                {movieDetails?.name ? movieDetails?.name : movieDetails?.title}
              </h1>
              <p className="description">{movieDetails?.overview}</p>
              <div className="banner-infos">
                <div className="pg-box box">
                  {movieDetails?.adult ? "pg-18" : "pg-12"}
                </div>
                <div className="hd-box box">
                  {movieDetails?.original_language}
                </div>
                <ul>
                  {genre?.map((item) => {
                    return <li> • {item.name}</li>;
                  })}
                </ul>
                <div className="date-time">
                  <MdOutlineDateRange />{" "}
                  {movieDetails?.first_air_date
                    ? movieDetails?.first_air_date
                    : movieDetails?.release_date}
                </div>
                <div className="date-time">
                  <BiTimeFive />
                  {movieDetails.runtime
                    ? movieDetails.runtime + "mins"
                    : "series"}
                </div>
                <div
                  className="rating"
                  style={{
                    color: `${color()}`,
                  }}
                >
                  Rating : {Math.floor(movieDetails.vote_average)}
                </div>
              </div>
              <div className="cast-div">
                <Carousel responsive={castResponsive}>
                  {castData?.map((data) => {
                    return (
                      <div className="cast">
                        <img
                          src={`${
                            data.profile_path !== null
                              ? "https://image.tmdb.org/t/p/original" +
                                data.profile_path
                              : "/profile-not-found.png"
                          }`}
                        />
                        <p>{data.name}</p>
                      </div>
                    );
                  })}
                </Carousel>
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
          <div className="x-padding banner-extra">
            {type == "movie" ? (
              <>
                <Featured title="latest movies" data={latestMovies} />
                <Featured title="popular movies" data={popularMovies} />
              </>
            ) : (
              <>
                <Featured title="popular series" data={popularSeries} />
                <Featured title="Top-rated series" data={topRatedSeries} />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Selected;
