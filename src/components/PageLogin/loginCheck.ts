import * as yup from "yup";

export const loginCheck = yup.object().shape({
  email: yup.string().required("Email é necessário"),
  password: yup.string().required("Favor informar a senha"),
});
