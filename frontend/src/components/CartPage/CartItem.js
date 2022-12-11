import { Link } from "react-router-dom";
import "./CartItem.css";
import { useEffect, useState } from "react";
import { deleteFromCart, updateItemCount } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import ProductShowPage from "../ProductShowPage";
function CartItem({product}) {
    const {id, name, price} = product;
    const [count, setCount] = useState(product.quantity);
    const userId = useSelector((state) => state.session.user?.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateItemCount(id, count))
    }, [dispatch, count, id])

    const countOptions = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
      ].map((num) => {
        if (num === "0") {
          return <option hidden key={num}>{`Qty: ${count}`}</option>;
        } else {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        }
      });


      
    return (
        <div className="cart-item-container">
            <div className="cart-item-image-container">
                <Link to={`/products/${id}`} target="_blank">
                    <img className="cart-item-image" src={product.photoURL} alt="product"></img>
                </Link>
            </div>
            <div className="item-center-container">
                <div className="item-name-container">
                    <div className="cart-item-name">{name}</div>
                    <div className="cart-stock-label">In Stock</div>
                    <div className="cart-eligible">Eligble for FREE Shipping & <span>FREE Returns</span></div>
                    <form className="cart-form">
                        <input type="checkbox"></input>
                        <label> This is a great project. &nbsp; 
                            <Link className="form-link" to={{ pathname: "https://www.linkedin.com/in/briehnyu/" }} target="_blank"> 
                                Learn more.
                            </Link>
                        </label>
                    </form>
                    <div className="quantity-section">
                        <div className="quantity">
                            <label className="box-shadow">
                                <select
                                    className="cart-count-select"
                                    value={`Qty: ${count}`}
                                    onChange={(e) => setCount(e.target.value)}
                                >
                                    {countOptions}
                                </select>
                            </label>
                        </div>
                        <div className="cart-item-delete-container">
                        <button
                              className="cart-item-delete-button"
                              onClick={(e) => {
                                dispatch(
                                  deleteFromCart(userId, id)
                                );
                              }}
                            >
                              Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-item-price">${price.toFixed(2)}</div>
        </div>
    )
}

export default CartItem;