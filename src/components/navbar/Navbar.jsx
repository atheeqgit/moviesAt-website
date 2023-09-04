import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <nav className={scrolled ? "nav-active x-padding" : "x-padding"}>
      <div className="logo-cont">
        <img src="/logo.png" />
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/series">series</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
      <div className="nav-buttons">
        <div className="search-btn btn">
          <BiSearch />
        </div>
        <div className="login-btn btn">Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
