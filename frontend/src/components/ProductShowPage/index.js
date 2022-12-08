import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/product";
import "./ProductShow.css";

function ProductShowPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId)) || {};
  console.log(product);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId, dispatch]);

  let wholeNum, decimal, priceStr;
  if (Object.keys(product).length > 0) {
    priceStr = product.price.toString().split(".");
    wholeNum = priceStr[0];
    decimal = priceStr[1] ? priceStr[1] : "00";
  }
  if (!product) return null;
  return (
    <div className="display-show-container">
      <div className="left-container">
        <img
          className="product-image-show"
          src={product.photoUrl}
          alt="product-display"
        ></img>
      </div>
      <div className="center-container">
        <span className="product-name">{product.name}</span>
      </div>
      <div className="right-container">
        <span className="price-symbol">$</span>
        <span className="price-main-price">{wholeNum}</span>
        <span className="price-symbol">{decimal}</span>
      </div>
    </div>
  );
}

export default ProductShowPage;
