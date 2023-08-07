import { Key, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import SumCart from "../sumValues";
import { AsidCart, CartLi, DivText, LiCart, UlCart } from "./styles";

const CartProducts = ({}) => {
  const { menuCart, removeAll, removeItem } = useContext(CartContext);
  const { setMenuCart } = useContext(UserContext);
  const totalCart = () => {
    const total = menuCart
      .map((item: { price: any }) => item.price)
      .reduce((initial: any, sum: any) => initial + sum, 0);

    return total;
  };
  useEffect(() => {
    const localStorageMenu = localStorage.getItem("menucart");
    if (localStorageMenu) {
      setMenuCart(JSON.parse(localStorageMenu));
    }
  }, []);
  return (
    <AsidCart>
      <DivText>
        <span>Carrinho de compras</span>
      </DivText>
      <UlCart>
        
        {menuCart.length !== 0 ? (
          menuCart.map(
            (item: {
              id: Key | null | undefined;
              img: string | undefined;
              name: string;
              category: string;
            }) => (
              <CartLi key={item.id}>
                <img src={item.img}></img>
                <div>
                  <h2>{item.name}</h2>
                  <span>{item.category}</span>
                </div>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </CartLi>
            )
          )
        ) : (
          <LiCart className="textEmpty">
            <h2>Sua sacola está vazia</h2>
            <span>Adicione itens</span>
          </LiCart>
        )}
        {menuCart.length !== 0 ? (
          <SumCart totalCart={totalCart} removeAll={removeAll}></SumCart>
        ) : (
          <></>
        )}
      </UlCart>
    </AsidCart>
  );
};

export default CartProducts;
