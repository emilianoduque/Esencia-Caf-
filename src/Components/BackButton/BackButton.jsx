import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./backbutton.scss";

const BackButton = () => {
    const navegate = useNavigate();
    const handleGoBack = () => {
        navegate(-1)
    };
  return (
    <button className="button-back" onClick={handleGoBack}>
        <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
    </button>
  )
}

export default BackButton