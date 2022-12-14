// frontend/src/components/Navigation/index.js

import React, { useState } from "react";
import { NavLink, Redirect, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import * as sessionActions from "../../store/session";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  let display;
  let login;
  if (sessionUser) {
    login = true;
    display = sessionUser.name;
  } else {
    display = "sign in";
  }

  let altDisplay;
  if (!sessionUser) {
    altDisplay = (
      <Link to="/login">
        <span>Hello, {display}</span>
        <p>Accounts & Lists</p>
      </Link>
    );
  } else {
    //should display profile page
    altDisplay = (
      <Link to="/login">
        <span>Hello, {display}</span>
        <p>Accounts & Lists</p>
      </Link>
    );
  }

  const triggerBackgroundChange = (e) => {
    const bg = document.querySelector(".dropdown-background");
    const dropdown = document.querySelector(".nav-bar-dropdown-content");
    e.stopPropagation();
    bg.style.display = "block";
    dropdown.style.display = "block";
  };

  const removeBackground = (e) => {
    const bg = document.querySelector(".dropdown-background");
    const dropdown = document.querySelector(".nav-bar-dropdown-content");
    e.stopPropagation();
    bg.style.display = "none";
    dropdown.style.display = "none";
  };

  const logout = () => {
    dispatch(sessionActions.logout());
    history.push("/");
    const dropdown = document.querySelector(".nav-bar-dropdown-content");
    const bg = document.querySelector(".dropdown-background");
    bg.style.display = "none";
    dropdown.style.display = "none";
  };

  return (
    <>
      <div className="dropdown-background"></div>
      <div className="nav-bar">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="icon-logo" className="nav-logo"></img>
          </Link>
          <img
            className="animated-digimon"
            src="https://thumbs.gfycat.com/OilyOrganicBoubou-size_restricted.gif"
            alt="guilmon"
          ></img>
          <img
            className="animated-digimon"
            src="https://thumbs.gfycat.com/OilyOrganicBoubou-size_restricted.gif"
            alt="guilmon"
          ></img>
          <img
            className="animated-digimon"
            src="https://thumbs.gfycat.com/OilyOrganicBoubou-size_restricted.gif"
            alt="guilmon"
          ></img>
          <img
            className="animated-digimon"
            src="https://thumbs.gfycat.com/OilyOrganicBoubou-size_restricted.gif"
            alt="guilmon"
          ></img>
          <img
            className="animated-digimon"
            src="https://thumbs.gfycat.com/OilyOrganicBoubou-size_restricted.gif"
            alt="guilmon"
          ></img>
        </div>
        <div className="nav-center">
          <form className="nav-search">
            <input type="text" className="nav-search-field"></input>
            <input type="submit" className="nav-search-button"></input>
          </form>
        </div>
        <div className="nav-right">
          <div
            className="nav-right-container"
            onMouseEnter={triggerBackgroundChange}
            onMouseLeave={removeBackground}
          >
            <div className="nav-bar-dropdown">
              <Link to="/login">
                <span>Hello, {display}</span>
                <p>Accounts & Lists</p>
              </Link>
              {!login && (
                <div className="nav-bar-dropdown-content">
                  <Link to="/login">Login</Link>
                  <div>
                    New customer? <Link to="/signup">Start here.</Link>
                  </div>
                </div>
              )}
              {login && (
                <div className="nav-bar-dropdown-content">
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          </div>
          <div className="nav-right-container">
            <span>Returns</span>
            <p>& Orders</p>
          </div>
          <Link className="cart-link" to={login ? "/carts" : "/login"}>
            <div className="nav-right-container">
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
