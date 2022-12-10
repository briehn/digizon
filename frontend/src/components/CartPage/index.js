
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { fetchCart, getCart, clearCart } from "../../store/cart";
import CartItem from "./CartItem"
import "./CartPage.css";

function CartPage() {
    const sessionUser = useSelector((state) => state.session.user);
    const cart = useSelector(getCart);
    const dispatch = useDispatch();

    const listCart = cart.map((product) => (
        <>
        <CartItem key={product.id} product={product} />
        <hr/>
        </>
    ));

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])


    return (
        <div className="cart-background">
            <div className="cart-container">   
                <div className="cart-label">Shopping Cart</div>
                <hr />
                <div className="cart-content">
                    {listCart}
                </div>
            </div>
        </div>
    )
}

export default CartPage;