import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export function MovieProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [trendingAll, setTrendingAll] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [newSeries, setNewSeries] = useState([]);
  const [genre, setGenre] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [genreResults, setGenreResults] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmViNjRkOGNkMDAxZGI3MGEwNWM2MTM3OGJlMzQ2MSIsInN1YiI6IjYzYzQzYTIxODUwMDVkMDBhMGUwMzBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mxbZahxbrvxVJOyq6XIlQQLgX0HyzLHNg7JS4AiuWIs",
    },
  };

  useEffect(() => {
    if (page < 1) {
      setPage(1); // Increment page to 1 if it is less than 1.
    }
  }, [page]);

  const fetchAll = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        options
      );

      setTrendingAll(response.data.results);
      setLoading(false);
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
      setLoading(false);
      //console.log(response.data.results);
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
      setLoading(false);
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
      setLoading(false);
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
      setLoading(false);
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
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGenre = async (type) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
        options
      );
      setGenre(response.data.genres);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchByGenre = async (type) => {
    try {
      if (activeGenre == 0) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
          options
        );
        if (page <= 1) {
          setGenreResults(response.data.results);
        } else {
          setGenreResults(genreResults.concat(response.data.results));
        }

        setTotalPage(response.data.total_pages);
      } else {
        const APIKEY = "8beb64d8cd001db70a05c61378be3461";
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/${type}?with_genres=${activeGenre}&api_key=${APIKEY}&page=${page}`
        );
        if (page <= 1) {
          setGenreResults(response.data.results);
        } else {
          setGenreResults(genreResults.concat(response.data.results));
        }
        setTotalPage(response.data.total_pages);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  //=========================================================

  return (
    <Context.Provider
      value={{
        options,
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
        genre,
        setGenre,
        activeGenre,
        setActiveGenre,
        fetchGenre,
        genreResults,
        setGenreResults,
        fetchByGenre,
        loading,
        page,
        setPage,
        totalPage,
        setTotalPage,

        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}
