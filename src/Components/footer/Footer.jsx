import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
        <div className="row-1">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6776.034162511017!2d-56.9368458182001!3d-31.87895222511857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575073afb5fde09%3A0x4a5596616016524a!2sUruguay!5e0!3m2!1ses!2suy!4v1732237540577!5m2!1ses!2suy"></iframe>
        </div>
        <div className="row-2">
            <p className="title-footer">Dirección</p>
            <p>Lorem ipsum dolor sit</p>
            <p>consectetur adipisicing elit.</p>
        </div>
        <div className="row-3">
            <p className="title-footer">Contacto:</p>
            <p>+5434125512</p>
            <p>Copyright 2024</p>

            <a href="" target="_blank"><FaInstagram/></a>
            <a href="" target="_blank"><FaXTwitter/></a>
            <a href="" target="_blank"><FaFacebookF/></a>
        </div>
        <div className="redes">
         
        </div>
    </footer>
  )
}

export default Footer