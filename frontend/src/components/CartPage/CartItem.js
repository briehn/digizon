import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem({product}) {
    const {id, name, price} = product;
    console.log(product)
    return (
        <div className="cart-item-container">
            <div className="cart-item-image-container">
                <Link to={`/products/${id}`} target="_blank">
                    <img className="cart-item-image" src={product.photoURL} alt="product"></img>
                </Link>
            </div>
            <div className="item-name-container">
                <div className="cart-item-name">{name}</div>
            </div>
            <div className="cart-item-price">${price}</div>
        </div>
    )
}

export default CartItem;