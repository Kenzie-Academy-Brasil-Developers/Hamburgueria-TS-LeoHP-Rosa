import React from "react";
import LoginCont from "../components/PageLogin";
import ContImg from "../styles/components/contImg";
import { LoginStyle } from "../styles/styles";

const LoginPage = () => {
  return (
    <LoginStyle>
      <LoginCont></LoginCont>
      <ContImg></ContImg>
    </LoginStyle>
  );
};

export default LoginPage;
