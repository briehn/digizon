// frontend/src/components/Navigation/index.js

import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>

        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <ul className="navBar">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      {sessionLinks}
    </ul>
  );
}

export default Navigation;
