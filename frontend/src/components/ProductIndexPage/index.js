import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from "../../store/product";
import ProductItem from "./ProductItem";

import "./ProductIndex.css";

function ProductIndexPage() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const listProducts = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <div className="display-container">
      <div className="product-item-container">{listProducts}</div>
    </div>
  );
}

export default ProductIndexPage;
