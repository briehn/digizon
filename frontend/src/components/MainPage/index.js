import "./MainPage.css";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import grid01 from "../../assets/grid_assets/grid_0_1.png"
import grid02 from "../../assets/grid_assets/grid_0_2.png"
import grid03 from "../../assets/grid_assets/grid_0_3.png"
import grid04 from "../../assets/grid_assets/grid_0_4.png"

import grid05 from "../../assets/grid_assets/grid_0_5.png"
import grid06 from "../../assets/grid_assets/grid_0_6.png"
import grid07 from "../../assets/grid_assets/grid_0_7.png"
import grid08 from "../../assets/grid_assets/grid_0_8.png"

import grid09 from "../../assets/grid_assets/grid_0_9.png"
import grid10 from "../../assets/grid_assets/grid_1_0.png"
import grid11 from "../../assets/grid_assets/grid_1_1.png"
import grid12 from "../../assets/grid_assets/grid_1_2.png"
import TopRatedCarousel from "../TopRatedCarousel";

function MainPage() {
  return (
    <div className="main-container">
      <div className="main-banner">
        <Carousel />
      </div>
      <div className="main-grid-container">
        <div className="grid-box">
          <div className="grid-box-label">Top Digizon Choices</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <Link to="/category/Digitama">
                <img
                  className="grid-image"
                  src={grid01} //replace with image of digitama
                  alt="grid-showcase"
                ></img>
              </Link>
              <div className="grid-image-label">Digi-Friendly</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/18/">
              <img
                className="grid-image"
                src={grid02}//replace with image of random digitama
                alt="grid-showcase"
              ></img></Link>
              <div className="grid-image-label">Try-Your-Luck</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/1">
                <img
                  className="grid-image"
                  src={grid03} //replace with taichi digivice
                  alt="grid-showcase"
                ></img>
              </Link>
              <div className="grid-image-label">The OG Device</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/17">
              <img
                className="grid-image"
                src={grid04} //replace with a crest
                alt="grid-showcase"
              ></img></Link>
              <div className="grid-image-label">Most Re-CREST-ed</div>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="grid-box-label">The Digimon Champion Picks</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <Link to="/products/5">
              <img
                className="grid-image"
                src={grid05} //replace with data link device
                alt="grid-showcase"
              ></img></Link>
              <div className="grid-image-label">Data Link For Life</div>
            </div>
            <div className="grid-box-image">
              <Link to="/category/Crests">
              <img
                className="grid-image"
                src={grid06} //replace with image of digitag
                alt="grid-showcase"
              ></img></Link>
              <div className="grid-image-label">Tag You're It</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/19">
              <img
                className="grid-image"
                src={grid07} //replace with digitama
                alt="grid-showcase"
              ></img>
              </Link>
              <div className="grid-image-label">Best Priced Digitama</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/7">
              <img
                className="grid-image"
                src={grid08} //replace with crest
                alt="grid-showcase"
              ></img>
              </Link>
              <div className="grid-image-label">Best Crest, Not For Teeth</div>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="grid-box-label">Digitama For Everyone</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <Link to="/products/19">
              <img
                className="grid-image"
                src={grid09}
                alt="grid-showcase"
              ></img>
              </Link>
              <div className="grid-image-label">Main Character Vibez</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/27">
              <img
                className="grid-image"
                src={grid10}
                alt="grid-showcase"
              ></img></Link>
              <div className="grid-image-label">IT'S SO CUTE</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/21"></Link>
              <img
                className="grid-image"
                src={grid11}
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">I Want 10!</div>
            </div>
            <div className="grid-box-image">
              <Link to="/products/20">
              <img
                className="grid-image"
                src={grid12}
                alt="grid-showcase"
              ></img></Link>
              <div className="grid-image-label">Underdog</div>
            </div>
          </div>
        </div>
        {/* <div className="grid-box sign-in-box">
          <div className="grid-sign-in">
            <div className="grid-box-label">
              Sign in for the best experience
            </div>
          </div>
        </div> */}
      </div>
      <TopRatedCarousel/>
    </div>
  );
}

export default MainPage;
