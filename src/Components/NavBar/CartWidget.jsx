import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    const quantity = totalQuantity();
  return (
    <Link to="/carro" className="cart">
        <p className={ quantity === 0 ? "empty-cart" : "cart-product"}>
        <CiShoppingCart />
        </p>
        <p className="quantity">
        {
            quantity >= 1 && quantity
        }
        </p>
       
    </Link>
  )
}

export default CartWidget