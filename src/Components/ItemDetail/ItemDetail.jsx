import { useState, useContext } from "react";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.scss";

const ItemDetail = ({product}) => {
    const [showItemCount, setShowItemCount] = useState(true);
    const { addProductInCart} = useContext(CartContext);

    const addProduct = (count) => {
        const productCart = {...product, quantity:count};
        addProductInCart(productCart);
        setShowItemCount(false);
    }
  return (
    <>
        <BackButton></BackButton>
        <div className="itemDetailContainer">
            <img src={product.img} alt="" />
            <div className="title-detail">
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
            <p>{product.descripcion}</p>
            {
                showItemCount === true ? (<ItemCount stock={product.stock} addProduct={addProduct}></ItemCount>) : (<Link to="/carro" className="terminar-compra">Terminar Mi Compra</Link>)
            }
             </div>
        </div>
    </>
  )
}

export default ItemDetail