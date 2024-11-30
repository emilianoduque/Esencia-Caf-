import { Link } from "react-router-dom";
import "./item.scss";

const Item = ({product}) => {
  return (
    <Link to={"/detalle/" + product.id }  className="card">
        <img src={product.img} alt="" />
        <h2>{product.nombre}</h2>
        <p>Precio: ${product.precio}</p>
    </Link>
  )
}

export default Item