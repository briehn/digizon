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

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let rating = 0;
  reviews.forEach((review) => {
    rating += review.rating;
  });
  if (rating > 0) {
    rating = (rating / reviews.length).toFixed(1);
  }

  const createdToDate = (date) => {
    date = new Date(date);
    let str = date.toDateString();
    str = str.split(" ");
    return `${monthNames[date.getMonth()]} ${str[2]}, ${str[3]}`;
  };

  const listReviews = reviews.map((review) => (
    <div className="product-review">
      <div className="review-name">{review.user.name}</div>
      <div className="review-rating">
        {review.rating} Star Rating{" "}
        <span className="review-heading">{review.headline}</span>
      </div>
      <div className="review-location-label">
        Reviewed in the United States on {createdToDate(review.createdAt)}
      </div>
      <div className="review-body">{review.body}</div>
    </div>
  ));

  return (
    <>
      <hr />
      <div className="main-review-container">
        <div className="product-ratings-container">
          <div className="product-ratings-label">Customer Reviews</div>
          <div className="product-ratings-score">{rating} out of 5</div>
        </div>
        <div className="product-reviews-container">
          <div className="product-review-label">
            Top reviews from the United States
          </div>
          {listReviews}
        </div>
      </div>
    </>
  );
}

export default Reviews;
