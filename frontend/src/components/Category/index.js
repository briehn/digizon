import "./CategoryBar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../store/product";

function CategoryBar() {
  const categories = ["Digitama", "Crests", "Digivice", "Accessories"];
  const catLinks = categories.map((category) => (
    <Link className="category-link" key={category} to={`/${category}`}>
      {category}
    </Link>
  ));

  return (
    <div className="category-bar-container">
      <Link className="category-link" key="products" to="/products">
        All Products
      </Link>
      {catLinks}
    </div>
  );
}

export default CategoryBar;
