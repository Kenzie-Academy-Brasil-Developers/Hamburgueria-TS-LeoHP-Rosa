import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonGreen, GreyButton } from "../../styles/components/buttons";
import { LeftCont } from "./styles";
import { loginCheck } from "./loginCheck";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { inputStyle } from "../../styles/components/input";

const LoginCont = () => {
  const { UserLogin } = useContext(UserContext);
  interface iLoginData {
    email: string;
    password: string;
  }

  const GoRegisNav = () => {
    navigate("/register");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    mode: "onChange",
    resolver: yupResolver(loginCheck),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const submit: SubmitHandler<iLoginData> = (data: any) => {
    UserLogin(data);
  };
  return (
    <LeftCont>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">Nome</label>
        <input
          placeholder="Digite seu Login"
          type="text"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <label htmlFor="">Senha</label>
        <input
          placeholder="Digite sua senha"
          type="password"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <ButtonGreen>Logar</ButtonGreen>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <GreyButton onClick={() => GoRegisNav()}>Cadastrar</GreyButton>
      </form>
    </LeftCont>
  );
};

export default LoginCont;
