import * as yup from "yup";

export const registerCheck = yup.object().shape({
  name: yup.string().required("O nome é obrigatório!").min(3).max(100),
  email: yup
    .string()
    .required("O email é obrigatório!")
    .email("Favor fornecer um e-mail valido"),
  password: yup
    .string()

    .min(6, "A senha deve conter ao menos 8 caracteres"),
});
