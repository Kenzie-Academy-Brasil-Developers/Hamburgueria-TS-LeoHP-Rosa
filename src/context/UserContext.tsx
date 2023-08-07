import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IcartProps {
  UserLogin(data: any): Promise<void>;
  regUser(data: any): Promise<void>;
  menuList: any;
  setMenuList: any;
  menuCart: React.Dispatch<any> | any;
  setMenuCart: any;
}

interface iUserProviderProps {
  children: React.ReactNode;
}
export const UserContext = createContext({} as IcartProps);
export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState([]);
  const localStorageMenu = localStorage.getItem("menucart");

  const [menuCart, setMenuCart] = useState(
    localStorageMenu ? JSON.parse(localStorageMenu) : []
  );

  const regUser = async (data: any) => {
    try {
      const response = await api.post("/users", data);
      if (response) {
        toast.success("Usuario Criado com Sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 3500);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const UserLogin = async (data: any) => {
    try {
      const response = await api.post("/login", data);
      toast.success("Login realizado com sucesso");

      localStorage.setItem("@TOKEN", response.data.accessToken);
      const token = response.data.accessToken;

      const productsResponse = await api.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMenuList(productsResponse.data);

      setTimeout(() => {
        navigate("/home");
      }, 3500);
    } catch (err: any) {
      if (err.response.data == "Incorrect password") {
        toast.error("Incorret email or password");
      } else if (err.response.data == "Cannot find user") {
        toast.error("User not registered");
      } else {
        toast.error(err.response.data);
      }
    }
  };
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const response = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setMenuList(response.data);

          navigate("/home");
        } catch (err) {
          console.log(err);
          navigate("/");
          localStorage.clear();
        }
      } else {
        navigate("/");
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        UserLogin,
        regUser,
        menuList,
        setMenuList,
        setMenuCart,
        menuCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
