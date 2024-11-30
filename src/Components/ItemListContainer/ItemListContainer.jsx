import ItemList from "./ItemList";
import useProducts from "../customHook/useProducts";
import BackButton from "../BackButton/BackButton";
import "./itemListContainer.scss";
import {motion} from "motion/react";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const { products, loading } = useProducts();
  return (
    <>
        <BackButton/>
        {
          loading ? (<Loader/>) :
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: "linear" }} className="ItemListContainer">
           <ItemList products={products}></ItemList>
           </motion.div>
        }
       
    </>
  )
}

export default ItemListContainer