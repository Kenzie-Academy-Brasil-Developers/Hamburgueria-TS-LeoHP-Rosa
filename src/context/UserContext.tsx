import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({} as IcartProps);
interface IcartProps {
  UserLogin: any;
  regUser: any;
}

interface iUserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const submit = (data: any) => {
    regUser(data);
  };
  async function regUser(data: any) {
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
  }
  async function UserLogin(data: any) {
    try {
      const response = await api.post("/login", data);
      toast.success("Login realizado com sucesso");

      localStorage.setItem("@TOKEN", response.data.accessToken);
      {
        response.status === 200 && toast.success("Login Efetuado com Sucesso!");
        setTimeout(() => {
          navigate("/home");
        }, 3500);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const response = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          navigate("/home");
        } catch (err) {
          console.log(err);
          // navigate("/");
          localStorage.clear();
        }
      } else {
        // navigate("/");
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ UserLogin, regUser }}>
      {children}
    </UserContext.Provider>
  );
};
