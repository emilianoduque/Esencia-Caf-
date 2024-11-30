import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import dataBase from "../../DataBase/db.js";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    const [ loading, setLoading] = useState(true);

    function getProducts() {
        const productsRef = collection(dataBase, "Productos");
        getDocs(productsRef)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data()}
                })
                setProducts(productsDb);
            })
    }

    function getProductCategory(){
        const productsRef = collection(dataBase, "Productos");
        const queryCategories = query(productsRef, where("categoria", "==", category))

        setLoading(true);
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data()}
                })
                setProducts(productsDb);
            })
            .finally(setLoading(false));
    }

    useEffect(() => {
        if(category){
            getProductCategory();
        } else {
            getProducts();
        }
    }, [category])

  return  { products, loading }
}

export default useProducts;