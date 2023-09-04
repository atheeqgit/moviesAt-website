import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export function MovieProvider({ children }) {
  const [trendingAll, setTrendingAll] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [newSeries, setNewSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmViNjRkOGNkMDAxZGI3MGEwNWM2MTM3OGJlMzQ2MSIsInN1YiI6IjYzYzQzYTIxODUwMDVkMDBhMGUwMzBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mxbZahxbrvxVJOyq6XIlQQLgX0HyzLHNg7JS4AiuWIs",
    },
  };

  const fetchAll = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        options
      );

      setTrendingAll(response.data.results);
      // console.log(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchLatest = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );

      setLatestMovies(response.data.results);
      //   console.log(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPopular = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      setPopularMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPopularTv = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/tv/week?language=en-U",
        options
      );
      setPopularSeries(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchNewSeries = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        options
      );
      setNewSeries(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTopRatedSeries = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",

        options
      );
      setTopRatedSeries(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,

        options
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  //=========================================================

  return (
    <Context.Provider
      value={{
        fetchLatest,
        fetchPopular,
        fetchPopularTv,
        trendingAll,
        setTrendingAll,
        latestMovies,
        setLatestMovies,
        popularMovies,
        setPopularMovies,
        popularSeries,
        setPopularSeries,
        fetchAll,
        fetchNewSeries,
        newSeries,
        fetchTopRatedSeries,
        topRatedSeries,
        fetchDetail,
      }}
    >
      {children}
    </Context.Provider>
  );
}
