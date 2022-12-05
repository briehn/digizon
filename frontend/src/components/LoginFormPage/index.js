import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";
import logo from "../../assets/logo.png";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  return (
    <div className="center-section">
      <Link to="/">
        <img src={logo} alt="icon-logo" className="signup-logo"></img>
      </Link>
      <div className="center-form">
        <p className="createAccount">Sign in</p>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label className="login-label">
            Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-button" type="submit">Log In</button>
        </form>
        <p className="terms">By creating an account, you agree that Digizon's logo is beautiful and 
          deserves to be printed and framed.</p>
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
