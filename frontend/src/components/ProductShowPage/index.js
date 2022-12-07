import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/product";

function ProductShowPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId)) || {};

  useEffect(() => {
    if (productId) dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return (
    <div className="display-container">
      <ul>
        <li>{product.name}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li>{product.category}</li>
      </ul>
    </div>
  );
}

export default ProductShowPage;
