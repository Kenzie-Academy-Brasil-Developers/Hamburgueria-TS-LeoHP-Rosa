import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LeftCont } from "../PageLogin/styles";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { registerCheck } from "./registerCheck";
import { ButtonGreen } from "../../styles/components/buttons";
import { Link } from "react-router-dom";

const RegisterCont = () => {
  interface iRegisterData {
    name: string;
    password: string;
    email: string;
  }
  const submit: SubmitHandler<iRegisterData> = (data: any) => {
    regUser(data);
  };
  const { regUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerCheck),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <LeftCont>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">Nome</label>
        <input
          placeholder="Digite seu Login"
          type="text"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}
        <label htmlFor="">Senha</label>
        <input
          placeholder="Digite sua senha"
          type="password"
          {...register("password")}
        />
        {errors.password?.message && <p>{errors.password.message}</p>}
        <label htmlFor="">Email</label>
        <input
          placeholder="Digite seu email"
          type="text"
          {...register("email")}
        />
        {errors.email?.message && <p>{errors.email.message}</p>}
        <ButtonGreen>Registrar</ButtonGreen>
        <Link to="/" className="link">
          Ja possue cadastro? Faça seu login clicando aqui
        </Link>
      </form>
    </LeftCont>
  );
};

export default RegisterCont;
