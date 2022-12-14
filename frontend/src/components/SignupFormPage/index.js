// frontend/src/components/SignupFormPage/index.js
import "./SignupForm.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import logo from "../../assets/logo.png";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const buttonText = email.length > 0 ? `Verify Email` : `Continue`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.signup({ email, name, password })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (
          password.length >= 1 &&
          (password !== confirmPassword || confirmPassword.length === 0)
        ) {
          if (data?.errors) {
            data.errors.push("SecondPassword needs to be typed");
          } else {
            data.push("SecondPassword needs to be typed");
          }
        }

        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  const displayError = (input) => {
    let messages = {
      email: {
        1: "Wrong or invalid email address. Please correct and try again.",
        2: "Enter your email.",
      },
      name: {
        1: "Enter your name",
      },
      password: {
        1: "Minimum 6 characters required",
      },
      secondpassword: {
        1: "Type your passsword again",
      },
    };
    let result = "";
    let type;
    let field;
    errors.forEach((error) => {
      type = error.split(" ")[0].toLowerCase();
      if (type === input) {
        if (input === "password") {
          let passwordContent = document.getElementById("password-content");
          passwordContent.style.display = "none";
        }
        field = document.getElementById(`${type}`);
        field.style.borderColor = "#d00";
        field.style.boxShadow = "0 0 0 3px rgb(221 0 0 / 10%) inset";
        if (type === "email" && email.length < 1) {
          result = messages.email[2];
        } else {
          result = messages[input][1];
        }
      }
    });
    return <p>{result}</p>;
  };

  return (
    <div className="center-section">
      <Link to="/">
        <img src={logo} alt="icon-logo" className="signup-logo"></img>
      </Link>
      <div className="center-form">
        <p className="createAccount">Create account</p>
        <form onSubmit={handleSubmit}>
          <label className="sign-up-label">
            Your name
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
            />
            <div className="error">{displayError("name")}</div>
          </label>
          <label className="sign-up-label">
            Email
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{displayError("email")}</div>
          </label>
          <label className="sign-up-label">
            Password
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
            <p id="password-content" className="icon-content">
              Passwords must be at least 6 characters
            </p>
            <div className="error">{displayError("password")}</div>
          </label>
          <label className="sign-up-label">
            Re-enter Password
            <input
              id="secondpassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="error">{displayError("secondpassword")}</div>
          </label>
          <button className="sign-up-button" type="submit">
            {buttonText}
          </button>
        </form>
        <p className="terms">
          By creating an account, you agree that Digizon's logo is beautiful and
          deserves to be printed and framed.
        </p>
        <div className="divider"></div>
        <p className="options-tag">
          Already have an account?{" "}
          <Link className="a-link" to="/login">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupFormPage;
