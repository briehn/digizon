import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/product";

function ReviewCreateForm() {
  const userId = useSelector((state) => state.session.user?.id);
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));

  if (userId === undefined) history.push("/login");

  return (
    <div className="create-review-container">
      <form>
        <div className="create-review-top-container">
          <div className="create-review-label">Create Review</div>
          <div className="create-review-product-container">
            {/* <img></img> */}
            <div className="create-review-product-name">{product.name}</div>
          </div>
        </div>
        <hr />
        <div className="create-review-headline-container">
          <div className="create-review-headline-label">Add a headline</div>
          <input
            type="text"
            placeholder="What's most important to know?"
          ></input>
        </div>
        <hr />
        <div className="create-review-body-container">
          <div className="create-review-body-label">Add a written review</div>
          <textarea placeholder="What did you like or dislike? What did you use this product for?"></textarea>
        </div>
        <hr />
        <div className="create-review-submit-container">
          <input type="Submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default ReviewCreateForm;
