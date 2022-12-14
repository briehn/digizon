import React from "react";
import {
  CarouselProvider,
  Image,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import carousel1 from "../../assets/carousel_1.png";
import carousel2 from "../../assets/carousel_2.png";
import carousel3 from "../../assets/carousel_3.png";
import carousel4 from "../../assets/carousel_4.png";
import backButton from "../../assets/back-button.png";
import nextButton from "../../assets/next-button.png";

function Carousel() {
  return (
    <CarouselProvider
      style={{ position: "relative" }}
      visibileSlides={1}
      totalSlides={4}
      step={1}
      hasMasterSpinner
      infinite
      playDirection={"forward"}
      naturalSlideHeight={350}
      naturalSlideWidth={1200}
      isPlaying
      interval={5000}
      dragEnabled={false}
    >
      <Slider>
        <Slide className="carousel-slide" index={0}>
          <Image className="carousel-image" src={carousel1} />
        </Slide>
        <Slide className="carousel-slide" index={1}>
          <Image className="carousel-image" src={carousel2} />
        </Slide>
        <Slide className="carousel-slide" index={2}>
          <Image className="carousel-image" src={carousel3} />
        </Slide>
        <Slide className="carousel-slide" index={3}>
          <Image className="carousel-image" src={carousel4} />
        </Slide>
      </Slider>
      <div className="carousel-button-container">
        <ButtonBack className="carousel-button back-button">
          <img
            className="carousel-button-image"
            src={backButton}
            alt="back-button"
          ></img>
        </ButtonBack>
        <ButtonNext className="carousel-button next-button">
          <img
            className="carousel-button-image"
            src={nextButton}
            alt="next-button"
          ></img>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default Carousel;
