import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import { fetchCart, getCart, clearCart } from "../../store/cart";
import CartItem from "./CartItem";
import emptyCart from "../../assets/sad_digimon.png";
import "./CartPage.css";
import TopRatedCarousel from "../TopRatedCarousel";

function CartPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const [subTotal, setSubtotal] = useState(0.0);
  const history = useHistory();

  const listCart = cart.map((product) => (
    <>
      <CartItem key={product.id} product={product} />
      <hr />
    </>
  ));

  useEffect(() => {
    calculateSubTotal();
  });

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const calculateCartSize = () => {
    let size = 0;
    cart.forEach((product) => {
      size += product.quantity;
    });
    return size;
  };

  const calculateSubTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity * product.price;
    });
    setSubtotal(Math.round(total * 100) / 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    history.push("/carts/checkout");
  };

  return (
    <div className="background-container">
      <div className="cart-background">
        {calculateCartSize() > 0 && (
          <>
            <div className="cart-container">
              <div className="cart-label">Shopping Cart</div>
              <div className="cart-price-label">Price</div>
              <hr className="top-border" />
              <div className="cart-content">{listCart}</div>
              <div className="sub-total-container">
                Subtotal ({calculateCartSize()}{" "}
                {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
                <span className="sub-total-amt">${subTotal}</span>
              </div>
            </div>
            <div className="checkout-container">
              <div className="sub-total-container">
                Subtotal ({calculateCartSize()}{" "}
                {calculateCartSize() > 1 ? "items" : "item"}):&nbsp;
                <span className="sub-total-amt">${subTotal}</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="submit"
                  className="checkout-btn"
                  value="Proceed to Checkout"
                ></input>
              </form>
            </div>
          </>
        )}
        {calculateCartSize() < 1 && (
          <>
            <div className="empty-cart-container">
              <div className="cart-empty-image-container">
                <img
                  className="empty-cart-image"
                  src={emptyCart}
                  alt="sad-digimon"
                ></img>
              </div>
              <div className="cart-empty-label-container">
                <p className="cart-empty-label">Your Digizon Cart is empty</p>
              </div>
            </div>
          </>
        )}
      </div>
      <TopRatedCarousel />
    </div>
  );
}

export default CartPage;
