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

  const listReviews = reviews.map((review) => (
    <>
      <div>{review.user.name}</div>
      <div>{review.body}</div>
    </>
  ));

  return <div>{listReviews}</div>;
}

export default Reviews;
