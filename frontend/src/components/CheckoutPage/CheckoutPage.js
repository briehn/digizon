import "./CheckOutPage.css";
import checkoutCheck from "../../assets/checkout.png";
import { Link } from "react-router-dom";

function CheckoutPage() {
  //

  return (
    <div className="cart-background">
      <div className="checkout-confirm-container">
        <div className="checkout-image-container">
          <img
            className="checkout-image"
            src="https://i.pinimg.com/originals/24/d3/60/24d360089c3327de3ede6250c61a587f.gif"
            alt="happy-digimon"
          ></img>
        </div>
        <div className="checkout-label-container">
          <div className="order-placed">
            <img
              className="confirmed-image"
              src={checkoutCheck}
              alt="checkout-confirmed"
            ></img>{" "}
            <span className="checkout-label">Order placed, thanks!</span>
          </div>
          <div className="checkout-misc">
            <div className="secret-message">
              Items not delivered cannot be refunded nor brought up in any
              scenario. Thank you.
            </div>
            <div className="self-plug">
              If you'd like to know more things Digimon, have recommendations
              for this website, or just want to hire me:{" "}
              <Link
                className="product-linked-link checkout-link-ref"
                to={{ pathname: "https://www.linkedin.com/in/briehnyu/" }}
                target="_blank"
              >
                CLICK HERE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutPage;
