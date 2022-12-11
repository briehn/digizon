import csrfFetch from "./csrf";
export const RECEIVE_CART = "cart/RECEIVE_CART";
export const DELETE_CART = "cart/DELETE_CART";
export const CLEAR_CART = "cart/CLEAR_CART";

export const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
});

//not used?
export const deleteCart = (cart) => ({
    type: DELETE_CART,
    cart
});

export const emptyCart = () => ({
    type: CLEAR_CART,
});

export const getCart = (state) =>
  state.carts.cart ? Object.values(state.carts.cart) : [];

export const fetchCart = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/carts/${userId}`);
    const data = await res.json();
    dispatch(receiveCart(data));
}

export const addToCart = (product_id, quantity) => async (dispatch) => {
    const res = await csrfFetch(`/api/carts`, {
        method: "POST",
        body: JSON.stringify({cart: {product_id, quantity}}),
        headers: {
          "content-type": "application/json",
        }
    });
    const data = await res.json();
    dispatch(receiveCart(data));
}

export const updateItemCount = (product_id, quantity) => async (dispatch) => {
    const res = await csrfFetch("/api/update_count", {
        method: "PATCH",
        body: JSON.stringify({cart: {product_id, quantity}}),
        headers: {
            "content-type": "application/json",
        }
    });
    const data = await res.json();
    dispatch(receiveCart(data));
}

export const deleteFromCart = (user_id, product_id) => async (dispatch) => {
    const res = await csrfFetch(`/api/carts/${user_id}`, {
        method: "DELETE",
        body: JSON.stringify({product_id}), 
        headers: {
            "content-type": "application/json",
        }
    });
    const data = await res.json();
    dispatch(receiveCart(data));
}


const cartReducer = (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
        case RECEIVE_CART:
            return action.cart;
        case CLEAR_CART:
            return {};
        default:
            return state;
    }
}

export default cartReducer;