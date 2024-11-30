import { object, string} from "yup";

let userSchema = object({
    nombre: string().required("Falta el nombre"),
    email: string().email("Falta el email"),
    agenda: string(),
    mesa: string()
})

const validateForm = (dataForm) => {
    return userSchema.validate(dataForm)
        .then(() =>{
            return {status: "success"};
        })
        .catch((error) => {
            return {status: "error", message: error.message};
        })
}

export default validateForm;