import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProducts } from "../../store/product";

function ProductIndexPage() {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const listProducts = products.map((product) => (
    <ul>
      <li>{product.name}</li>
      <li>{product.description}</li>
      <li>{product.price}</li>
      <li>{product.category}</li>
    </ul>
  ));

  return <div className="display-container">{listProducts}</div>;
}

export default ProductIndexPage;
