import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MainPage from "./components/MainPage";
import ProductIndex from "./components/ProductIndexPage";
import ProductShow from "./components/ProductShowPage";
import "./reset.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/products">
          <Navigation />
          <ProductIndex />
        </Route>
        <Route path="/products/:product_id">
          <Navigation />
          <ProductShow />
        </Route>
      </Switch>
    </>
  );
}

export default App;
