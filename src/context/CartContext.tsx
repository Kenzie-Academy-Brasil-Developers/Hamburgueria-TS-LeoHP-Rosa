import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const CartContext = createContext({} as IcartProps);
interface IcartProps {
  menuCart: any[];
  allList: never[];
  setAllList: React.Dispatch<React.SetStateAction<never[]>>;
  filtered: string;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
  removeItem: any;
  removeAll: any;
  addCart: any;
  active: boolean;
  filters: any;
  submit: any;
  clearFilter: any;
  btnLogout: () => void;
}

interface iCartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: iCartProviderProps) => {
  const navigate = useNavigate();
  const btnLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const { menuList, setMenuList, menuCart, setMenuCart } =
    useContext(UserContext);
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [active, setActive] = useState(false);

  const filters = (value: string) => {
    setFiltered(value.trim().toLowerCase());
  };
  const submit = () => {
    setActive(true);
    const filter = menuList.filter(
      (item: { name: string; category: string }) =>
        item.name.toLowerCase().includes(filtered) ||
        item.category.toLowerCase().includes(filtered)
    );
    setMenuList(filter);
  };
  const clearFilter = () => {
    setActive(false);
    const allValue = "e";
    const filter = allList.filter((item: { category: string | string[] }) =>
      item.category.includes(allValue)
    );
    setMenuList(filter);
  };

  useEffect(() => {
    async function getList() {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const response = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });

          setMenuList(response.data);
          setAllList(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    getList();
  }, []);
  const addCart = (cartNewList: any) => {
    const localStorageMenu = localStorage.getItem("menucart");
    const currentCartList = localStorageMenu
      ? JSON.parse(localStorageMenu)
      : [];
    if (!currentCartList.some((item: any) => item.id === cartNewList.id)) {
      const updatedCartList = [...currentCartList, cartNewList];
      localStorage.setItem("menucart", JSON.stringify(updatedCartList));
      setMenuCart(updatedCartList);
      toast.success("Item adicionado ao carrinho");
    } else {
      toast.error("Você já adicionou este item");
    }
  };
  const removeItem = (itemId: any) => {
    const listFilter = menuCart.filter((item: any) => item.id !== itemId);
    setMenuCart(listFilter);
    localStorage.setItem("menucart", JSON.stringify(listFilter)); // Atualiza o localStorage
    toast.warn("Item removido do carrinho");
  };

  const removeAll = () => {
    setMenuCart([]);
    localStorage.removeItem("menucart");
    toast.error("Alguém não está com fome, é uma pena!");
  };
  return (
    <CartContext.Provider
      value={{
        btnLogout,
        active,
        filters,
        submit,
        clearFilter,
        allList,
        setAllList,
        filtered,
        setFiltered,
        menuCart,
        removeItem,
        removeAll,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
