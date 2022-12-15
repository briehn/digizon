import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
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
  const [sortBy, setSortBy] = useState("Featured");
  const [listed, setListed] = useState(products);

  let listProducts = listed.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  useEffect(() => {
    search
      ? dispatch(searchProductByName(search))
      : category
      ? dispatch(fetchProductsByCategory(category))
      : dispatch(fetchProducts());
  }, [dispatch, category, search]);

  useEffect(() => {
    setListed(products);
    setSortBy("Featured");
  }, [products]);

  const handleSorting = (e) => {
    const option = e.target.value;
    const sortToTitle = {
      base: {
        label: "Featured",
        products: listed,
      },
      asc: {
        label: "Price: Low to High",
        products: Object.values(listed).sort((x, y) =>
          x.price > y.price ? 1 : -1
        ),
      },
      desc: {
        label: "Price: High to Low",
        products: Object.values(listed).sort((x, y) =>
          x.price < y.price ? 1 : -1
        ),
      },
      avg: {
        label: "Avg. Customer Review",
        products: Object.values(listed).sort((x, y) =>
          x.ratings < y.ratings ? 1 : -1
        ),
      },
    };
    setSortBy(sortToTitle[option].label);
    setListed(sortToTitle[option].products);
  };

  return (
    <>
      {listProducts.length > 0 && (
        <div className="display-container">
          <div className="sort-by-container">
            <select
              className="sort-by-menu"
              value={`Sorted by: ${sortBy}`}
              onChange={handleSorting}
            >
              <option hidden value="hidden">
                Sort by: {sortBy}
              </option>
              <option value="base">Featured</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
              <option value="avg">Avg. Customer Review</option>
            </select>
          </div>
          {!search && (
            <div className="display-label">
              <span className="category-display">
                {category && category}
                {!category && "All Products"}
              </span>
            </div>
          )}
          {search && (
            <div className="search-results-container">
              <div className="search-label">
                Search results for:{" "}
                <span className="search-results">"{search}"</span>
              </div>
            </div>
          )}
          <div className="product-item-container">{listProducts}</div>
        </div>
      )}
      {listProducts.length === 0 && (
        <div className="no-product-container">
          <div>No Products Available</div>
        </div>
      )}
    </>
  );
}

export default ProductIndexPage;
