import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import {
  fetchProducts,
  fetchProductsByCategory,
  searchProductByName,
  getProducts,
} from "../../store/product";
import ProductItem from "./ProductItem";

import "./ProductIndex.css";
import { useParams } from "react-router-dom";

function ProductIndexPage() {
  const history = useHistory();
  const { category, search } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const listProducts = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  console.log(listProducts);

  useEffect(() => {
    search ? dispatch(searchProductByName(search)) : (category ? dispatch(fetchProductsByCategory(category)) : dispatch(fetchProducts()))
  }, [dispatch, category, search]);


  return (
    <>
    {(listProducts.length > 0) && (
      <div className="display-container">
      <div className="product-item-container">{listProducts}</div>
      </div>
    )}
    {(listProducts.length === 0) && (
      <div className="no-product-container">
        <div>No Products Available</div>
      </div>
    )}
    </>
  );
}

export default ProductIndexPage;
