import "./selectTable.scss";

const SelectTable = ({handleChangeInput, dataForm}) => {
  return (
    <div className="select-table">
        <label>Seleccionar una mesa</label>
        <select name="mesa" onChange={handleChangeInput} value={dataForm.mesa}>
            <option value="mesa1">mesa1</option>
            <option value="mesa2">mesa2</option>
            <option value="mesa3">mesa3</option>
            <option value="mesa4">mesa4</option>
            <option value="mesa5">mesa5</option>
        </select>
    </div>
  )
}

export default SelectTable