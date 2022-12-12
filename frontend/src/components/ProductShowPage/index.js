import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/product";
import { addToCart } from "../../store/cart";
import "./ProductShow.css";
import prime from "../../assets/prime.png";
import { Link } from "react-router-dom";

import Reviews from "../Reviews";

function ProductShowPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId)) || {};
  const [count, setCount] = useState(1);
  const userId = useSelector((state) => state.session.user?.id);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let wholeNum, decimal, priceStr;
  if (Object.keys(product).length > 0) {
    priceStr = product.price.toString().split(".");
    wholeNum = priceStr[0];
    decimal = priceStr[1] ? priceStr[1] : "00";
  }

  const countOptions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ].map((num) => {
    if (num === "0") {
      return <option hidden key={num}>{`Qty: ${count}`}</option>;
    } else {
      return (
        <option value={num} key={num}>
          {num}
        </option>
      );
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      dispatch(addToCart(product.id, count));
    } else {
      history.push("/login");
    }
    setCount(1);
  };

  const deliveryDate = (speed = "norm") => {
    const date = new Date();
    const offset = speed === "norm" ? 5 : 3;
    date.setDate(date.getDate() + offset);
    let str = date.toDateString(0, 10);
    str = str.split(" ");
    return `${days[date.getDay()]}, ${monthNames[date.getMonth()]} ${str[2]}`;
  };

  const deliveryTime = () => {
    const date = new Date();
    const time = `${24 - date.getHours()} hrs ${60 - date.getMinutes()} mins`;
    return time;
  };

  if (!product) return null;
  return (
    <div className="display-show-container">
      <div className="product-show-top-container">
        <div className="left-container">
          <img
            className="product-image-show"
            src={product.photoUrl}
            alt="product-display"
          ></img>
        </div>
        <div className="center-container">
          <span className="product-name">{product.name}</span>
          <hr />
          <div className="product-price">
            <span className="price-symbol">$</span>
            <span className="price-main-price">{wholeNum}</span>
            <span className="price-symbol">{decimal}</span>
          </div>
          <div>
            <img src={prime} alt="prime-logo" className="prime-logo"></img>
            <span className="prime-label">One-Day</span>
            <div className="return-label">FREE Returns</div>
            <div className="points-back">
              <span>Get 0% back</span> on the amount charged to your fictitious
              Digizon Prime Rewards Card.
              <div>
                May be available at a lower price from{" "}
                <Link
                  className="product-linked-link"
                  to={{ pathname: "https://www.linkedin.com/in/briehnyu/" }}
                  target="_blank"
                >
                  the developer
                </Link>{" "}
                of this website if you hire him.
              </div>
            </div>
          </div>
          <hr />
          <div className="center-bottom-container">
            <div className="about-label">About this item:</div>
            <ul className="about-list">
              <li>{product.description}</li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <div className="product-price">
            <span className="price-symbol">$</span>
            <span className="price-main-price">{wholeNum}</span>
            <span className="price-symbol">{decimal}</span>
          </div>
          <div>
            <img src={prime} alt="prime-logo" className="prime-logo"></img>
            <span className="prime-label">One-Day</span>
          </div>
          <div className="return-label">FREE Returns</div>
          <div className="delivery-label">
            FREE delivery{" "}
            <span className="delivery-date">{deliveryDate()}</span>
          </div>
          <div className="fastest-delivery">
            Or fastest delivery
            <span className="delivery-date"> {deliveryDate("fast")}</span>.
            Order within{" "}
            <span className="fast-delivery-hour">{deliveryTime()}</span>
          </div>
          <div className="stock-label">In Stock.</div>
          <form className="product-form" onSubmit={handleSubmit}>
            <div className="select-wrap">
              <label className="box-shadow">
                <select
                  className="count-select"
                  value={`Qty: ${count}`}
                  onChange={(e) => setCount(e.target.value)}
                >
                  {countOptions}
                </select>
              </label>
            </div>
            <input
              type="submit"
              className="product-add-btn"
              value="Add to Cart"
            ></input>
          </form>
          <div className="secure-label">Secure transaction</div>
          <div className="misc-label-ship">
            <div className="misc-ship">Ships from</div>
            <span className="misc-link">Digizon.com</span>
          </div>
          <div className="misc-label-sold">
            <div className="misc-sold">Sold by</div>
            <span className="misc-link">Digizon.com</span>
          </div>
          <div className="policy-label">
            Return policy:{" "}
            <span className="returnable-label">You break, you buy.</span>
          </div>
        </div>
      </div>
      <div className="review-section-container">
        <hr />
        {/* <Reviews productId={productId} /> */}
      </div>
    </div>
  );
}

export default ProductShowPage;
