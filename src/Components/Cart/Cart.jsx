import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./cart.scss";

const Cart = () => {
    const {cart, totalPrice, deleteProductById } = useContext(CartContext);

    if(cart.length === 0){
        return (
        <div className="no-products">
            <h2>No hay productos en el carro 😢</h2>
            <Link to="/" className="back-inicio">Inicio</Link>
        </div>
        )
    }
  return (
    <div className="cart-table">
        <h2>Productos</h2>
        {
            cart.map((productCart) => (
                <div key={productCart.id} className="cart-card">
                    <img src={productCart.img} alt="" />
                    <p>{productCart.nombre}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio Unidad: ${productCart.precio}</p>
                    <button onClick={() => deleteProductById(productCart.id)} className="button-rest">-</button>
                </div>
            ))
        }
        <p className="precio">Precio Total: {totalPrice()}</p>
        
        <Link to="/checkout" className="checkout-button">Comprar</Link>
    </div>
  )
}

export default Cart