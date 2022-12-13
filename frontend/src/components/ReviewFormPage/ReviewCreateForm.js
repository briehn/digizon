import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProduct } from "../../store/product";
import { addReview } from "../../store/review";
import "./ReviewCreateForm.css";

function ReviewCreateForm() {
  const userId = useSelector((state) => state.session.user?.id);
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector(getProduct(productId));
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [headline, setHeadline] = useState("");
  const [rating, setRating] = useState(0); //must complete
  const [body, setBody] = useState("");

  if (userId === undefined) history.push("/login");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(addReview({ headline, rating, body })).catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
      console.log(errors);
    });
  };

  return (
    <div className="create-review-container">
      <form onSubmit={handleSubmit}>
        <div className="create-review-top-container">
          <div className="create-review-label">Create Review</div>
          <div className="create-review-product-container">
            {/* <img></img> */}
            <div className="create-review-product-name">{product.name}</div>
          </div>
        </div>
        <hr />
        <div className="create-review-rating-container">
          <div className="create-review-rating-label">Overall Rating</div>
        </div>
        <hr />
        <div className="create-review-headline-container">
          <div className="create-review-headline-label">Add a headline</div>
          <input
            className="headline-input"
            type="text"
            placeholder="What's most important to know?"
          ></input>
        </div>
        <hr />
        <div className="create-review-body-container">
          <div className="create-review-body-label">Add a written review</div>
          <textarea
            className="body-input"
            placeholder="What did you like or dislike? What did you use this product for?"
          ></textarea>
        </div>
        <hr />
        <div className="create-review-submit-container">
          <input
            className="create-review-submit-button"
            type="Submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ReviewCreateForm;
