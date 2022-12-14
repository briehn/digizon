import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { fetchReview, getReview } from "../../store/review";
import { deleteReview } from "../../store/review";
import "./ReviewShowPage.css"
import emptyStar from "../../assets/review_empty_star.png"
import filledStar from "../../assets/review_filled_star.png"
import placeholder from "../../assets/placeholder_profile_ava.jpg"

function ReviewShowPage() {
    const {reviewId, productId} = useParams();
    const dispatch = useDispatch();
    const review = useSelector(getReview(reviewId)) || {};
    const userId = useSelector((state) => state.session.user?.id);

    useEffect(() => {
        dispatch(fetchReview(productId, userId))
    }, [dispatch, productId, userId])

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
    const createdToDate = (date) => {
        date = new Date(date);
        let str = date.toDateString();
        str = str.split(" ");
        return `${monthNames[date.getMonth()]} ${str[2]}, ${str[3]}`;
      };
    
      const displayStarRating = (review) => {
        let stars = [];
        for (let i = 0; i < review.rating; i++) {
          stars.push(
            <img className="star-ratings-image" src={filledStar} alt="filled-star"></img>
          )
        }
        for (let i = review.rating; i < 5; i++) {
          stars.push(
            <img className="star-ratings-image" src={emptyStar} alt="empty-star"></img>
          )
        }
        return stars;
      }

    return (
    <div className="product-review">
    <div className="customer-review-label">Customer Review</div>
      <div className="review-name-container">
        <div className="placeholder-pic">
          <img className="placeholder" src={placeholder} alt="avatar"></img>
          <span className="review-name">
            {review.user.name}
          </span>
        </div>
      </div>
      <div className="review-rating">
        <div className="review-star-ratings">{displayStarRating(review)} {" "}
        <span className="review-heading">{review.headline}</span></div>
      </div>
      <div className="review-location-label">
        Reviewed in the United States on {createdToDate(review.createdAt)}
      </div>
      <div className="review-body">{review.body}</div>
      {(review.userId === userId) && (
        <div className="authorized-review-buttons">
          <div className="edit-button-container">
            <Link to={`/products/${productId}/review/${review.id}/edit`}>Edit</Link>
          </div>
          <div className="delete-button-container">
            <button onClick={(e) => dispatch(deleteReview(review.id))}>Delete</button>
          </div>
        </div>
      )}
    </div>
    )
}

export default ReviewShowPage;