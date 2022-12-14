import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/product";
import {
  createReview,
  editReview,
  fetchReview,
  getReview,
} from "../../store/review";
import "./ReviewEditForm.css";
import emptyStar from "../../assets/empty_star.png";
import filledStar from "../../assets/filled_star.png";

function ReviewEditForm() {
  const userId = useSelector((state) => state.session.user?.id);
  const history = useHistory();
  const { productId, reviewId } = useParams();
  const product = useSelector(getProduct(productId)) || {};
  const review = useSelector(getReview(reviewId)) || {};
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [headline, setHeadline] = useState("");
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");

  if (userId === undefined) history.push("/login");

  useEffect(() => {
    dispatch(fetchReview(productId, userId));
    dispatch(fetchProduct(productId));
  }, [dispatch, reviewId, productId, userId]);

  useEffect(() => {
    if (review.headline) {
      setHeadline(review.headline);
      setRating(review.rating);
      setBody(review.body);
    }
  }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length === 0 || !errors.length) {
      history.push(`/products/${productId}`);
    }
    setErrors([]);
    dispatch(editReview(reviewId, headline, body, rating)).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  const displayError = (input) => {
    let messages = {
      headline: {
        1: "Please enter your headline.",
        2: "Please enter at most 100 characters.",
      },
      rating: {
        1: "Please select a star rating",
      },
      body: {
        1: "Please add a written review",
        2: "Please enter at most 20000 characters",
      },
    };
    let result = "";
    let type;
    errors.forEach((error) => {
      type = error.split(" ")[0].toLowerCase();
      if (type === input) {
        if (type === "headline" && headline.length > 100) {
          result = messages[type][2];
        } else if (type === "body" && body.length > 20000) {
          result = messages[type][2];
        } else {
          result = messages[input][1];
        }
      }
    });
    return <p>{result}</p>;
  };

  const handleRatingClick = (e, num) => {
    e.preventDefault();
    const stars = document.querySelectorAll(".review-star-image");

    stars.forEach((star, i) => {
      let pos = i + 1;
      if (pos <= num) {
        star.src = filledStar;
      }
      if (pos > num) {
        star.src = emptyStar;
      }
    });
    setRating(num);
  };

  const displayReviewStars = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <button
          className="review-star"
          onClick={(e) => handleRatingClick(e, i + 1)}
        >
          <img
            className="review-star-image"
            src={filledStar}
            alt="star-rating"
          ></img>
        </button>
      );
    }
    for (let i = rating; i < 5; i++) {
      stars.push(
        <button
          className="review-star"
          onClick={(e) => handleRatingClick(e, i + 1)}
        >
          <img
            className="review-star-image"
            src={emptyStar}
            alt="star-rating"
          ></img>
        </button>
      );
    }
    return stars;
  };
  if (!review || !product) return null;
  return (
    <div className="create-review-container">
      <form onSubmit={handleSubmit}>
        <div className="create-review-top-container">
          <div className="create-review-label">Edit Review</div>
          <div className="create-review-product-container">
            <div className="review-product-image-container">
              <img
                className="review-product-image"
                src="https://m.media-amazon.com/images/I/71sYQsPerwL._AC_SX466_.jpg"
                alt="review-item"
              ></img>
            </div>
            <div className="create-review-product-name">{product.name}</div>
          </div>
        </div>
        <hr />
        <div className="create-review-rating-container">
          <div className="create-review-rating-label">Overall Rating</div>
          <div className="create-review-star-rating-container">
            {displayReviewStars()}
          </div>
          <div className="review-error">{displayError("rating")}</div>
        </div>
        <hr />
        <div className="create-review-headline-container">
          <div className="create-review-headline-label">Add a headline</div>
          <input
            className="headline-input"
            type="text"
            value={headline} //works?
            onChange={(e) => setHeadline(e.target.value)}
          ></input>
          <div className="review-error">{displayError("headline")}</div>
        </div>
        <hr />
        <div className="create-review-body-container">
          <div className="create-review-body-label">Add a written review</div>
          <textarea
            value={body} //works? figure out a different way?
            className="body-input"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <div className="review-error">{displayError("body")}</div>
        </div>
        <hr />
        <div className="create-review-submit-container">
          <input
            className="create-review-submit-button"
            type="Submit"
            value="Submit"
            readOnly
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ReviewEditForm;
