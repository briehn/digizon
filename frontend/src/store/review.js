import csrfFetch from "./csrf";
import { addUser } from "./users.js";
export const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
export const ADD_REVIEW = "reviews/ADD_REVIEW";
export const ADD_REVIEWS = "reviews/ADD_REVIEWS";

export const removeReview = (review) => ({
  type: REMOVE_REVIEW,
  review,
});

export const addReview = (review) => ({
  type: ADD_REVIEW,
  review,
});

export const addReviews = (reviews) => ({
  type: ADD_REVIEWS,
  reviews,
});

export const getReviews = (productId) => (state) =>
  Object.values(state.reviews)
    .filter((review) => review.productId === productId)
    .map((review) => ({
      ...review,
      author: state.users[review.userId]?.username,
    }));

export const getReview = (reviewId) => (state) =>
  state.reviews ? state.reviews[reviewId] : null;

export const createReview = (review) => async (dispatch) => {
  const res = await csrfFetch("/api/revews", {
    method: "POST",
    body: JSON.stringify(review),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(addReview(data.review));
  dispatch(addUser(data.user));
};

export const fetchReviewsByProduct = (product_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product_id}/reviews`);
  const data = await res.json();
  dispatch(addReviews(data.reviews));
};

export const fetchReview = (product_id, user_id) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${product_id}/reviews/${user_id}`);
  const data = await res.json();
  dispatch(addReview(data.review));
  dispatch(addUser(data.user));
};

export const editReview = (id, body, rating) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ review: { body, rating } }),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await res.json();
  dispatch(addReview(data.review));
  dispatch(addReview(data.user));
};

export const deleteReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  dispatch(removeReview(data));
};

const reviewReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case ADD_REVIEWS:
      return { ...newState, ...action.reviews };
    case REMOVE_REVIEW:
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
