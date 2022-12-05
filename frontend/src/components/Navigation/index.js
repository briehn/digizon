// frontend/src/components/Navigation/index.js

import React, { useState } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navigation.css";
import logo from "../../assets/logo.png";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  let display;
  if (sessionUser) {
    display = sessionUser.name;
  } else {
    display = "sign in";
  }

  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="icon-logo" className="nav-logo"></img>
        </Link>
      </div>
      <div className="nav-center">
        <form className="nav-search">
          <input type="text" className="nav-search-field"></input>
          <input type="submit" className="nav-search-button"></input>
        </form>
      </div>
      <div className="nav-right">
        <div className="nav-right-container">
          <Link to="/login">
            <span>Hello, {display}</span>
            <p>Accounts & Lists</p>
          </Link>
        </div>
        <div className="nav-right-container">
          <span>Returns</span>
          <p>& Orders</p>
        </div>
        <div className="nav-right-container">
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
