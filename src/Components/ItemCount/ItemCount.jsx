import { useState } from "react";
import "./itemCount.scss";

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1);
    const handleClickRest = () => {
        if(count > 1){
            setCount(count -1);
        }
    }

    const handleClickAdd = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
  return (
    <div className="buttonsCount">
        <div>
        <button onClick={handleClickRest} className="button">-</button>
        {
            count
        }
        <button onClick={handleClickAdd} className="button">+</button>
        </div>
        <button onClick={() => addProduct(count)} className="button-add">Agregar</button>
    </div>
  )
}

export default ItemCount