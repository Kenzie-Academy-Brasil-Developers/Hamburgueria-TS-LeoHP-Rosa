import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export const ChangeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
    </Routes>
  );
};
