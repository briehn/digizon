import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CarouselProvider,
  Image,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { fetchProducts, getProducts } from "../../store/product";
import grid01 from "../../assets/grid_assets/grid_0_1.png";

import "./TopRated.css";

import backButton from "../../assets/top_rated_back_button.png";
import nextButton from "../../assets/top_rated_next_button.png";
import { useDispatch, useSelector } from "react-redux";

function TopRatedCarousel() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const productArray = Object.values(products);
  const sorted = productArray
    .sort((x, y) => (x.ratings < y.ratings ? 1 : -1))
    .map((product, i) => (
      <Slide tag="a" className="top-rated-carousel" index={i} key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Image
            class="top-rated-image"
            alt="top-rated-image"
            src={product.photoUrl}
          />
        </Link>
      </Slide>
    ));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="top-rated-carousel-container">
      <CarouselProvider
        className="top-rated-carousel-provider"
        style={{ position: "relative" }}
        visibleSlides={6}
        step={6}
        totalSlides={productArray.length}
        naturalSlideWidth={100}
        naturalSlideHeight={200}
        isIntrinsicHeight
      >
        <div className="top-rated-label">Top Rated Items</div>
        <Slider>{sorted}</Slider>

        <div className="top-rated-carousel-button-container">
          <ButtonBack className="top-rated-carousel-button top-rated-button back">
            <img
              src={backButton}
              alt="back-button"
              class="top-rated-button-image"
            ></img>
          </ButtonBack>
          <ButtonNext className="top-rated-carousel-button top-rated-button next">
            {" "}
            <img
              src={nextButton}
              alt="next-button"
              class="top-rated-button-image"
            ></img>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default TopRatedCarousel;
