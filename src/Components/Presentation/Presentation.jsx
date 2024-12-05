import { Link } from "react-router-dom";
import "./presentation.scss";
import { motion } from "motion/react"

const Presentation = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3, ease: "linear" }} className="presentacion">
        <h2>Esencia Café</h2>
        <p>Bienvenido a Esencia Café ☕
        Deléitate con los mejores cafés y exquisitas meriendas, creados para acompañar tus momentos más especiales. ¡Vive la experiencia Esencia Café!</p>
        <img src="/img/presentacion/cafe.png" alt="" />
        <Link to="/catalogo" className="boton-presentacion">Nuestro Catálogo</Link>
    </motion.div>
  )
}

export default Presentation