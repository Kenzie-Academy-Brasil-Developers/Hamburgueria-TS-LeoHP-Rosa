import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { ContainerUl, InfoValues, ProductList } from "./styles";

const Container = () => {
  const { addCart } = useContext(CartContext);
  const { menuList } = useContext(UserContext);

  return (
    <ContainerUl>
      {menuList.map(
        (item: {
          id: any;
          img: any;
          name: string | number;
          category: string | number;
          price: {
            toLocaleString: (
              arg0: string,
              arg1: { style: string; currency: string }
            ) => string | number;
          };
        }) => (
          <ProductList key={item.id}>
            <figure>
              <img src={item.img}></img>
            </figure>
            <InfoValues>
              <h2>{item.name}</h2>
              <span>{item.category}</span>
              <h6>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h6>
              <button
                onClick={() => {
                  addCart(item);
                }}
                id={item.id}
              >
                Adicionar
              </button>
            </InfoValues>
          </ProductList>
        )
      )}
    </ContainerUl>
  );
};

export default Container;
