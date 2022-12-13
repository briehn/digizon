import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getReviews, fetchReviewsByProduct } from "../../store/review";
import "./Reviews.css";

function Reviews({ productId }) {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchReviewsByProduct(productId));
  }, [dispatch, productId]);

  console.log(reviews);
  console.log(reviews.length);

  let rating = 0;
  reviews.forEach((review) => {
    rating += review.rating;
  })
  rating = rating / reviews.length;

  const listReviews = reviews.map((review) => (
    <div className="product-review">
        <div>{review.user.name}</div>
        <div>{review.headline}</div>
        <div>{review.body}</div>
    </div>
  ));

  return(
      <div className="main-review-container">
        <div className="product-ratings-container">
          <div className="product-ratings-label">Customer Reviews</div>
          <div className="product-ratings-score">{rating.toFixed(1)} out of 5</div>
        </div>
        <div className="product-reviews-container">
          <div className="product-review-label">Top reviews from the United States</div>
          {listReviews}
        </div>
    </div>
  );
}

export default Reviews;
