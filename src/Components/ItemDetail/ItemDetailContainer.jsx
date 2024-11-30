import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../customHook/useProducts";
import dataBase from "../../DataBase/db";
import { doc, getDoc} from "firebase/firestore";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {idProduct} = useParams();
    const {products} = useProducts();

    const getProductId = () => {
        const docRef = doc(dataBase, "Productos", idProduct)
        getDoc(docRef)
            .then((data) => {
                const productDb = {id: data.id, ...data.data()}
                setProduct(productDb);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        setLoading(true);
        getProductId()
    }, [idProduct])

  return (
    <div>
        {
            loading ? (<Loader/>) :(<ItemDetail product={product}></ItemDetail>)
        }
    </div>
  )
}

export default ItemDetailContainer