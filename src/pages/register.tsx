import React from "react";
import RegisterCont from "../components/register";
import ContImg from "../styles/components/contImg";
import { LoginStyle } from "../styles/styles";

const RegisterPage = () => {
  return (
    <LoginStyle>
      <ContImg></ContImg>
      <RegisterCont></RegisterCont>
    </LoginStyle>
  );
};

export default RegisterPage;
