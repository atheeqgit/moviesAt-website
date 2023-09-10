import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSunFill,
  RiMoonFill,
} from "react-icons/ri";

import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    if (window.innerWidth < 730) {
      setToggleMenu((toggleMenu) => !toggleMenu);
    }
  };

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

      <ul className={toggleMenu ? "nav-links show-nav" : "nav-links"}>
        <li className="nav-link">
          <NavLink
            to="/"
            onClick={() => {
              handleMenu();
            }}
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "Nav-active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            onClick={() => {
              handleMenu();
            }}
            to="/movies"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "Nav-active" : ""
            }
          >
            Movies
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            onClick={() => {
              handleMenu();
            }}
            to="/series"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "Nav-active" : ""
            }
          >
            series
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            onClick={() => {
              handleMenu();
            }}
            to="/categories"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "Nav-active" : ""
            }
          >
            Discover
          </NavLink>
        </li>
      </ul>
      <div className="nav-bt">
        <div className="nav-buttons">
          <NavLink
            onClick={() => {
              if (toggleMenu) {
                handleMenu();
              }
            }}
            to="/search"
            className="search-btn btn"
          >
            <BiSearch />
          </NavLink>
          {/* <div className="login-btn btn">Login</div> */}
        </div>
        <div
          className="menu-icons"
          onClick={() => {
            handleMenu();
          }}
        >
          {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
