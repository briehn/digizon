import { Link } from "react-router-dom";
import "./ProductItem.css";

function ProductItem({ product }) {
  const { id, name, price } = product;

  let priceStr = price.toString().split(".");
  let wholeNum = priceStr[0];
  let decimal = priceStr[1] ? priceStr[1] : "00";

  return (
    <div className="product-item-container">
      <div className="product-item-base">
        <div className="product-overlay">
          <Link to={`/products/${id}`}>
            <img
              className="product-item-image"
              src="https://m.media-amazon.com/images/I/51YrNSJTbjL._AC_UL320_.jpg"
              alt="product"
            ></img>
          </Link>
        </div>
        <Link className="product-item-name product-link" to={`/products/${id}`}>
          {name}
        </Link>
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
