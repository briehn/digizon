import "./MainPage.css";

function MainPage() {
  //IMAGE CAROUSEL
  //https://cdnb.artstation.com/p/assets/images/images/050/670/955/large/nadiah-najib-digimon-banner.jpg?1655394514
  //https://seller.tcgplayer.com/media/6727/digimon-card-game-digital-hazard-banner-03.jpg
  //https://seller.tcgplayer.com/media/6725/digimon-card-game-digital-hazard-banner-01.jpg
  //https://seller.tcgplayer.com/media/6560/digimon-card-game-next-adventure-banner_01.jpg

  return (
    <div className="main-container">
      <div className="main-banner">
        <img
          src="https://seller.tcgplayer.com/media/6727/digimon-card-game-digital-hazard-banner-03.jpg"
          alt="main-banner"
          className="banner-img"
        ></img>
      </div>
      <div className="main-grid-container">
        <div className="grid-box">
          <div className="grid-box-label">Top Digimon Picks</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid-box">
          <div className="grid-box-label">The Digimon Champion Picks</div>
          <div className="grid-box-image-container">
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
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
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
            <div className="grid-box-image">
              <img
                className="grid-image"
                src="https://i.imgur.com/VYw9Mmk.jpg"
                alt="grid-showcase"
              ></img>
            </div>
          </div>
        </div>
        <div className="grid-box sign-in-box">
          <div className="grid-sign-in">
            <div className="grid-box-label">
              Sign in for the best experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
