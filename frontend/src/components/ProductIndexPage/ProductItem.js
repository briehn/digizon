import { Link } from "react-router-dom";
import "./ProductItem.css";
import emptyStar from "../../assets/review_empty_star.png";
import filledStar from "../../assets/review_filled_star.png";
import prime from "../../assets/prime.png";

function ProductItem({ product }) {
  const { id, name, price, ratings, reviewCount } = product;

  let priceStr = price.toString().split(".");
  let wholeNum = priceStr[0];
  let decimal = priceStr[1] ? priceStr[1] : "00";

  const displayStarRating = () => {
    let stars = [];
    for (let i = 0; i < Math.floor(ratings); i++) {
      stars.push(
        <img
          className="star-ratings-image"
          src={filledStar}
          alt="filled-star"
        ></img>
      );
    }
    for (let i = ratings; i < 5; i++) {
      stars.push(
        <img
          className="star-ratings-image"
          src={emptyStar}
          alt="empty-star"
        ></img>
      );
    }
    return stars;
  };

  return (
    <div className="product-item-cell">
      <div className="product-item-base">
        <div className="product-overlay">
          <Link to={`/products/${id}`}>
            <img
              className="product-item-image"
              src={product.photoUrl}
              alt="product"
            ></img>
          </Link>
        </div>
        <Link className="product-item-name product-link" to={`/products/${id}`}>
          {name}
        </Link>
        <div className="product-item-rating">
          {displayStarRating()}
          <span className="product-ratings-length">{reviewCount}</span>
        </div>
        <Link
          className="product-item-price product-link"
          to={`/products/${id}`}
        >
          <span className="price-symbol">$</span>
          <span className="price-main-price">{wholeNum}</span>
          <span className="price-symbol">{decimal}</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
