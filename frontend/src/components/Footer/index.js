import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="its-a-me-the-developer">Designed by Brian Yu</div>
      <div className="link-container">
        <Link to={{ pathname: "https://github.com/briehn" }} target="_blank">
          <img
            className="git-icon"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="git"
          ></img>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/briehnyu/" }}
          target="_blank"
        >
          {" "}
          <img
            className="linkedin-icon"
            src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
            alt="linkedin"
          ></img>
        </Link>
      </div>
      <div className="copyright-note">© 2022, Digizon.com</div>
    </footer>
  );
}

export default Footer;
