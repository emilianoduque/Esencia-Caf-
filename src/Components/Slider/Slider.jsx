import "./slider.scss";
import {motion } from "motion/react";

const Slider = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3, ease: "linear" }} id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/img/sliders/slider-1.png" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/img/sliders/slider-2.png" className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/img/sliders/slider-3.png" className="d-block" alt="..."/>
    </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>
    </motion.div>
  )
}

export default Slider