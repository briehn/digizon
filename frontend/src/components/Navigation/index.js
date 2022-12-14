// frontend/src/components/Navigation/index.js

import React, { useEffect, useState } from "react";
import { NavLink, Redirect, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Navigation.css";
import { fetchCart, clearCart } from "../../store/cart";
import cartIcon from "../../assets/cart.png";
import logo from "../../assets/logo.png";
import * as sessionActions from "../../store/session";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.carts.cart);
  let display;
  let login;
  if (sessionUser) {
    login = true;
    display = sessionUser.name;
  } else {
    display = "sign in";
  }

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    } else {
      dispatch(clearCart());
    }
  }, [userId, dispatch]);

  const getCartLength = (cart) => {
    // debugger;
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", (e) => handleAfterClick(e));
    window.addEventListener("pageshow", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", handleAfterClick);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pageshow", handleBeforeUnload);
    };
  }, []);

  function handleBeforeUnload() {
    setSearch("");
  }

  function handleAfterClick(e) {
    if (e.target.tagName === "a") {
      setSearch("");
    }
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
    dropdown.style.display = "flex";
  };

  const removeBackground = (e) => {
    const bg = document.querySelector(".dropdown-background");
    const dropdown = document.querySelector(".nav-bar-dropdown-content");
    e.stopPropagation();
    bg.style.display = "none";
    dropdown.style.display = "none";
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      history.push(`/${search}`);
    }
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
          <form className="nav-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="nav-search-field"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
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
              <div className="nav-bar-dropdown-content">
                <div className="dropdown-gif-container">
                  <img
                    className="dropdown-gif-image"
                    src="https://thumbs.gfycat.com/MellowElegantAffenpinscher-size_restricted.gif"
                    alt="dropdown-gif"
                  ></img>
                </div>
                <div className="dropdown-right-container">
                  {!login && (
                    <>
                      <Link className="dropdown-signin-button" to="/login">
                        Sign In
                      </Link>
                      <div className="dropdown-signup-label">
                        New customer?{" "}
                        <Link className="dropdown-signup-link" to="/signup">
                          Start here.
                        </Link>
                      </div>
                    </>
                  )}
                  {login && (
                    <>
                      <button
                        className="dropdown-logout-button"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="nav-right-container">
            <span>Returns</span>
            <p>& Orders</p>
          </div>
          <Link className="cart-link" to={login ? "/carts" : "/login"}>
            <div className=" nav-cart-container">
              <div className="nav-cart-image-container">
                <span className="nav-cart-count">
                  {" "}
                  {cart ? getCartLength(cart) : 0}
                </span>
                <img className="nav-cart" src={cartIcon} alt="cart"></img>
              </div>
              <div className="nav-cart-label">
                <p>Cart</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
