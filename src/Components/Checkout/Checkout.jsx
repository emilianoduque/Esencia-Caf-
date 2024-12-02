import { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import dataBase from "../../DataBase/db.js";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FormCheckout from "./FormCheckout";
import validateForm from "../validateForm.js";
import "./checkout.scss";

const Checkout = () => {
    const [idOrder, setIdOrder] = useState(null);
    const [dataForm, setDataForm] = useState({
        nombre: "",
        email: "",
        agenda: "",
        opcion: "",
        mesa: ""
    })

    const { cart, totalPrice, deleteCart} = useContext(CartContext);

    const handleChangeInput = (event) => {
        const {name, value} = event.target;
        setDataForm({...dataForm, [name]: value})
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const order = {
            comprador: {...dataForm},
            productos: {...cart},
            fecha: Timestamp.fromDate(new Date()),
            total: totalPrice()
        };

        validateForm(dataForm)
            .then((resp) => {
                if(resp.status === "error"){
                    throw new Error(resp.message);
                }
                toast.success("Subiendo orden...");
                submitOrder(order);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    }

    const submitOrder = (newOrder) => {
        const ordersRef = collection(dataBase, "ordenes");
        addDoc(ordersRef, newOrder)
            .then((resp) => setIdOrder(resp.id))
            .catch((error) => console.error(error))
            .finally(() => {
                uploadStock();
                deleteCart();
            })
    }
    const uploadStock = () => {
        cart.map(({id, quantity, ...dataProduct}) => {
            const productRef = doc(dataBase, "Productos", id)
            setDoc(productRef, {...dataProduct, stock:dataProduct.stock - quantity})
        })
    }
    
  return (
    <div>
        {
            idOrder === null ? (<FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}></FormCheckout>) : <div className="end-buy">
            <h2>Gracias por tu compra</h2>
            <p>Numero de orden: {idOrder}</p>
            <Link to="/" className="go-back">Volver al inicio</Link>
            </div>
        }
    </div>
  )
}

export default Checkout