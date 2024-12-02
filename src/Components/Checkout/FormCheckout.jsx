import { useState } from "react";
import SelectTable from "./SelectTable";
import "./formCheckout.scss";

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
    const [showTableSelector, setShowTableSelector] = useState(false);
    const handleSelectChange = (event) => {
        const {name, value} = event.target;
        handleChangeInput(event);
        if(name === "opcion" && value === "en-lugar"){
            setShowTableSelector(true);
        } else {
            setShowTableSelector(false);
        }
    }
  return (
    <form onSubmit={handleSubmitForm}>
        <label>Nombre Completo</label>
        <input type="text" name="nombre" value={dataForm.nombre} onChange={handleChangeInput}/>

        <label>Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>

        <label>Selecciona Opción</label>
        <select name="opcion" value={dataForm.opcion} onChange={handleSelectChange}>
            <option value="retirar">Retirar</option>
            <option value="en-lugar">En Local</option>
        </select>

        {
            showTableSelector && <SelectTable handleChangeInput={handleChangeInput} dataForm={dataForm}></SelectTable>
        }

        <button type="submit">Comprar</button>
       
    </form>
  )
}

export default FormCheckout