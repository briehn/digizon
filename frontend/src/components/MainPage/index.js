import "./MainPage.css";
import Carousel from "../Carousel";

function MainPage() {
  //IMAGE CAROUSEL
  //https://cdnb.artstation.com/p/assets/images/images/050/670/955/large/nadiah-najib-digimon-banner.jpg?1655394514
  //https://seller.tcgplayer.com/media/6727/digimon-card-game-digital-hazard-banner-03.jpg
  //https://seller.tcgplayer.com/media/6725/digimon-card-game-digital-hazard-banner-01.jpg
  //https://seller.tcgplayer.com/media/6560/digimon-card-game-next-adventure-banner_01.jpg

  return (
    <div className="main-container">
      <div className="main-banner">
        {/* <img
          src="https://seller.tcgplayer.com/media/6727/digimon-card-game-digital-hazard-banner-03.jpg"
          alt="main-banner"
          className="banner-img"
        ></img> */}
        <Carousel />
      </div>
      <div className="main-grid-container">
        <div className="grid-box">
          <div className="grid-box-label">Top Digizon Choices</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with image of digitama
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Digi-Friendly</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with image of random digitama
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Try-Your-Luck</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with taichi digivice
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">The OG Device</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with a crest
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Most Re-CREST-ed</div>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="grid-box-label">The Digimon Champion Picks</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with data link device
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Data Link For Life</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with image of digitag
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Tag You're It</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with digitama
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Best Priced Digitama</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg" //replace with crest
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Best Crest, Not For Teeth</div>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="grid-box-label">Digitama For Everyone</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">Main Character Vibez</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">IT'S SO CUTE</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
              <div className="grid-image-label">I Want 10!</div>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
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
    </div>
  );
}

export default MainPage;
