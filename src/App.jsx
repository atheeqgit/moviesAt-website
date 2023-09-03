import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selected from "./pages/selected/Selected";
import Series from "./pages/series/Series";
import Movies from "./pages/movies/Movies";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";

function App() {
  // api key = 8beb64d8cd001db70a05c61378be3461
  //api read acess token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmViNjRkOGNkMDAxZGI3MGEwNWM2MTM3OGJlMzQ2MSIsInN1YiI6IjYzYzQzYTIxODUwMDVkMDBhMGUwMzBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mxbZahxbrvxVJOyq6XIlQQLgX0HyzLHNg7JS4AiuWIs
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/selected/:id" element={<Selected />} />
          {/* <Route path="/search" element={<Search />} /> */}
          <Route path="*" element={<h1>not available</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
