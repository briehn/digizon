import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsByCategory,
  getProducts,
} from "../../store/product";
import ProductItem from "./ProductItem";

import "./ProductIndex.css";
import { useParams } from "react-router-dom";

function ProductIndexPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const listProducts = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  useEffect(() => {
    category
      ? dispatch(fetchProductsByCategory(category))
      : dispatch(fetchProducts());
  }, [dispatch, category]);

  return (
    <div className="display-container">
      <div className="product-item-container">{listProducts}</div>
    </div>
  );
}

export default ProductIndexPage;
