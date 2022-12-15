import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";
import logo from "../../assets/logo.png";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleChangeEmail = (e) => {
    let field = document.getElementById(`email`);
    field.style.border = "1px solid #a6a6a6";
    field.style.boxShadow = "none";
    setErrors([]);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    let field = document.getElementById(`password`);
    field.style.border = "1px solid #a6a6a6";
    field.style.boxShadow = "none";
    setErrors([]);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
        console.log(errors);
      }
    );
  };

  const displayError = (input) => {
    let messages = {
      email: {
        2: "Enter your email.",
        1: "We cannot find an account with that email address",
      },
      password: {
        1: "Password is invalid.",
      },
    };
    let result = "";
    let type;
    let field;
    errors.forEach((error) => {
      type = error.split(" ")[0].toLowerCase();
      if (type === input) {
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

  const loginDemo = () => {
    const demoUser = {
      email: "tai@digi.io",
      password: "password",
    };
    dispatch(sessionActions.login(demoUser));
  };

  return (
    <div className="center-section">
      <Link to="/">
        <img src={logo} alt="icon-logo" className="signup-logo"></img>
      </Link>
      <div className="center-form">
        <p className="createAccount">Sign in</p>
        <form onSubmit={handleSubmit}>
          <label className="login-label">
            Email
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <div className="error">{displayError("email")}</div>
          <label className="login-label">
            Password
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <div className="error">{displayError("password")}</div>
          <button className="login-button" type="submit">
            Log In
          </button>
        </form>
        <button className="login-button" type="submit" onClick={loginDemo}>
          Demo Login
        </button>
        <p className="terms">
          By creating an account, you agree that Digizon's logo is beautiful and
          deserves to be printed and framed.
        </p>
      </div>
      <div className="divider-container">
        <div className="divider-break"></div>
        <h5>New to Digizon?</h5>
      </div>
      <Link to="/signup">
        <button type="submit" className="signup-button">
          Create your Digizon account
        </button>
      </Link>
    </div>
  );
}

export default LoginFormPage;
