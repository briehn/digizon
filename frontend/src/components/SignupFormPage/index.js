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
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password })).catch(
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
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className="center-section">
      <Link to="/">
        <img src={logo} alt="icon-logo" className="signup-logo"></img>
      </Link>
      <div className="center-form">
        <p className="createAccount">Create account</p>
        <form onSubmit={handleSubmit}>
          <ul>
            {/* {errors.map((error) => (
              <li key={error}>{error}</li>
            ))} */}
            {console.log(errors)}
          </ul>
          <label className="sign-up-label">
            Your name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
            />
          </label>
          <div className="error"> </div>
          <label className="sign-up-label">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="sign-up-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
            <p className="icon-content">
              Passwords must be at least 6 characters
            </p>
          </label>
          <label className="sign-up-label">
            Re-enter Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
