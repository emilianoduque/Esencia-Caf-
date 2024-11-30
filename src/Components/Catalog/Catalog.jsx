import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdEmojiFoodBeverage } from "react-icons/md";
import "./catalog.scss";
import {motion} from "motion/react";

const Catalog = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: "linear" }} className="catalogo">
        <BackButton/>
        <div className="categories">
              <h1>Opciones</h1>
              <div className="opciones">
                <Link to="/categoria/comida" className="categoria">Comida <MdOutlineFoodBank className="icon"/></Link>
                <Link to="/categoria/bebida" className="categoria">Bebida <MdEmojiFoodBeverage className="icon"/></Link>
              </div>
        </div>
    </motion.div>
  )
}

export default Catalog