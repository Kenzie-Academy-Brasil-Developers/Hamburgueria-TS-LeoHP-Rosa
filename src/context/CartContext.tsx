import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const CartContext = createContext({} as IcartProps);
interface IcartProps {
  menuCart: any;
  menuList: any;
  setMenuList: any;
  allList: any;
  setAllList: any;
  filtered: any;
  setFiltered: any;
  removeItem: any;
  removeAll: any;
  addCart: any;
  active: any;
  filters: any;
  submit: any;
  clearFilter: any;
  btnLogout: any;
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

  const [active, setActive] = useState(false);

  function filters(value: string) {
    setFiltered(value.trim().toLowerCase());
  }
  function submit() {
    setActive(true);
    const filter = menuList.filter(
      (item: { name: string; category: string }) =>
        item.name.toLowerCase().includes(filtered) ||
        item.category.toLowerCase().includes(filtered)
    );
    setMenuList(filter);
  }
  function clearFilter() {
    setActive(false);
    const allValue = "e";
    const filter = allList.filter((item: { category: string | string[] }) =>
      item.category.includes(allValue)
    );
    setMenuList(filter);
  }
  const localStorageMenu = localStorage.getItem("menucart");

  const [menuCart, setMenuCart] = useState(
    localStorageMenu ? JSON.parse(localStorageMenu) : []
  );
  const [menuList, setMenuList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [filtered, setFiltered] = useState("");
  useEffect(() => {
    async function getList() {
      const token = localStorage.getItem("@TOKEN");
      console.log(token);
      if (token) {
        try {
          const response = await api.get("/products", {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(response);
          setMenuList(response.data);
          setAllList(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    getList();
  }, []);
  function addCart(cartNewList: any) {
    if (!menuCart.includes(cartNewList)) {
      setMenuCart([...menuCart, cartNewList]);
      toast.success("Item adicionado ao carrinho");
    } else {
      toast.error("Você ja adicionou este item");
    }
  }
  function removeItem(itemId: any) {
    const listFilter = menuCart.filter((item: any) => item.id !== itemId);
    setMenuCart(listFilter);
    toast.warn("Item removido do carrinho");
  }
  function removeAll() {
    setMenuCart([]);
    toast.error("Alguem não está com fome é uma pena!");
  }
  return (
    <CartContext.Provider
      value={{
        btnLogout,
        active,
        filters,
        submit,
        clearFilter,
        menuList,
        setMenuList,
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
