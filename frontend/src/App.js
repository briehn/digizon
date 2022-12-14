import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import MainPage from "./components/MainPage";
import ProductIndex from "./components/ProductIndexPage";
import ProductShow from "./components/ProductShowPage";
import CategoryBar from "./components/Category";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import ReviewCreateForm from "./components/ReviewFormPage/ReviewCreateForm";
import ReviewEditForm from "./components/ReviewFormPage/ReviewEditForm";
import ReviewShowPage from "./components/Reviews/ReviewShowPage";
import "./reset.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <CategoryBar />
          <MainPage />
          <Footer />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/carts">
          <Navigation />
          <CategoryBar />
          <CartPage />
          <Footer />
        </Route>
        <Route exact path="/products">
          <Navigation />
          <CategoryBar />
          <ProductIndex />
          <Footer />
        </Route>
        <Route exact path="/products/:productId">
          <Navigation />
          <CategoryBar />
          <ProductShow />
          <Footer />
        </Route>
        <Route exact path="/category/:category">
          <Navigation />
          <CategoryBar />
          <ProductIndex />
          <Footer />
        </Route>
        <Route exact path="/:search">
          <Navigation />
          <CategoryBar />
          <ProductIndex />
          <Footer />
        </Route>
        <Route exact path="/products/:productId/review">
          <Navigation />
          <CategoryBar />
          <ReviewCreateForm />
          <Footer />
        </Route>
        <Route exact path="/products/:productId/review/:reviewId">
          <Navigation />
          <CategoryBar />
          <ReviewShowPage />
          <Footer />
        </Route>
        <Route exact path="/products/:productId/review/:reviewId/edit">
          <Navigation />
          <CategoryBar />
          <ReviewEditForm />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
