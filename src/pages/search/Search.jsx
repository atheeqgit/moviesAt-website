import React, { useEffect, useState, useContext } from "react";
import "./search.css";
import { Context } from "../../contextPage";
import axios from "axios";
import Card from "../../components/card/Card";
import ReactLoading from "react-loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const {
    page,
    setPage,
    totalPage,
    setTotalPage,
    setLoading,
    loading,
    options,
  } = useContext(Context);

  const [searchResults, setSearchResults] = useState([]);

  const fetchSearch = async (input) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${input}&include_adult=true&language=en-US&page=${page}`,
        options
      );

      if (page <= 1) {
        setSearchResults(response.data.results);
      } else {
        setSearchResults(searchResults.concat(response.data.results));
      }

      setTotalPage(response.data.total_pages);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const [input, setInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  return (
    <div className="x-margin x-padding search">
      <div className="input-div">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div
          className="btn"
          onClick={() => {
            if (input != "" && input != prevInput) {
              setPage(1);
              fetchSearch(input);
              setPrevInput(input);
            }
          }}
        >
          Search
        </div>
      </div>
      <InfiniteScroll
        className="genre-grid"
        dataLength={searchResults.length} //This is important field to render the next data
        next={() => {
          setPage(page + 1);
          fetchSearch(input);
        }}
        hasMore={page < totalPage}
        loader={
          <ReactLoading
            type={"spinningBubbles"}
            color={"#45ff16"}
            height={"5rem"}
            width={"5rem"}
          />
        }
        scrollThreshol={0.9}
        style={{ overflow: "hidden" }}
      >
        {searchResults?.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Search;
