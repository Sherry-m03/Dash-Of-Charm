import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Navbar({ setQuery, getNavQuery }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleSearchClick = () => {
    isSearchBarOpen ? setIsSearchBarOpen(false) : setIsSearchBarOpen(true);
  };

  const handleQueryChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (location.pathname === "/recipes") {
      getNavQuery(inputValue);
    } else {
      navigate("/recipes", { state: inputValue });
    }
  };

  return (
    <div className="home-navbar">
      <div className="home-navbar-div">
        <div className="media-icons">
          <Link to="https://www.linkedin.com/in/shreya-masta/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt="linkedIn"
            />
          </Link>
          <Link to="https://shreya-masta.onrender.com/">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/world-globe-white-icon.svg"
              alt="linkedIn"
            />
          </Link>
          <Link to="https://github.com/Sherry-m03">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
              alt="github"
            />
          </Link>
        </div>
        <div className="nav-links">
          <div
            className="nav-ref"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </div>
          <div
            className="nav-ref"
            onClick={() => {
              navigate("/recipes");
            }}
          >
            RECIPES
          </div>
          <div
            className="nav-ref"
            onClick={() => {
              navigate("/about");
            }}
          >
            ABOUT
          </div>
          <div
            className="nav-ref"
            onClick={() => {
              navigate("/contact");
            }}
          >
            CONTACT
          </div>
        </div>
        <div className="searchbar">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.svg"
            alt="linkedIn"
            onClick={handleSearchClick}
          />
        </div>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleQueryChange}
        onKeyDown={handleEnterPress}
        className={isSearchBarOpen ? "searchbar-open" : "searchbar-hidden"}
      ></input>
    </div>
  );
}
