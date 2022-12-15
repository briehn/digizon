import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Image,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
    fetchProducts,
    getProducts,
  } from "../../store/product";
import grid01 from "../../assets/grid_assets/grid_0_1.png"

import "./TopRated.css";

import backButton from "../../assets/back-button.png";
import nextButton from "../../assets/next-button.png";
import { useDispatch, useSelector } from "react-redux";

function TopRatedCarousel() {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const productArray = Object.values(products);
    const sorted = productArray.sort((x, y) => x.ratings < y.ratings ? 1 : -1).map((product, i) => (
        <Slide tag="a" className="top-rated-carousel" index={i} key={product.id}>
          <Link to={`/products/${product.id}`}>
             <Image alt="top-rated-image" src={grid01} />
             </Link>
        </Slide>
        )
    )
    // debugger;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])


  return (
    <div className="top-rated-carousel-container">
    <CarouselProvider
    className="top-rated-carousel-provider"
    style={{ position: "relative" }}
    visibleSlides={6}
    totalSlides={productArray.length}
    naturalSlideWidth={100}
    naturalSlideHeight={200}
    isIntrinsicHeight
  >
    <div className="top-rated-label">Top Rated Items</div>
    <Slider>
      {sorted}
    </Slider>
    
    <div className="top-rated-carousel-button-container">
    <ButtonBack className="carousel-button back-button">Back</ButtonBack>
    <ButtonNext className="carousel-button next-button">Next</ButtonNext>
    </div>
  </CarouselProvider>
  </div>
  );
}

export default TopRatedCarousel;
