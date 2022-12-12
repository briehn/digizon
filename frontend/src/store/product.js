import csrfFetch from "./csrf.js";
export const RECEIVE_PRODUCTS = "products/RECEIVE_PRODUCTS";
export const RECIEVE_PRODUCT = "products/RECIEVE_PRODUCT";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECIEVE_PRODUCT,
  product,
});

export const getProducts = (state) =>
  state.products ? Object.values(state.products) : [];

export const getProduct = (productId) => (state) =>
  state.products ? state.products[productId] : null;

export const fetchProducts = () => async (dispatch) => {
  const res = await csrfFetch("/api/products");
  const data = await res.json();
  dispatch(receiveProducts(data));
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`);
  const data = await res.json();
  dispatch(receiveProduct(data));
};

export const fetchProductsByCategory = (category) => async (dispatch) => {
  const res = await csrfFetch(
    "/api/products?" + new URLSearchParams({ category }),
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await res.json();
  dispatch(receiveProducts(data));
};

const productsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECIEVE_PRODUCT:
      newState[action.product.id] = action.product;
      return newState;
    default:
      return state;
  }
};

export default productsReducer;
