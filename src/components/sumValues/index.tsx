import { DivSum } from "./styles";

interface IpropsState {
  totalCart: any;
  removeAll: any;
}
const SumCart = ({ totalCart, removeAll }: IpropsState) => {
  return (
    <DivSum>
      <div>
        <h3>Total:</h3>
        <span>
          {totalCart().toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </DivSum>
  );
};

export default SumCart;
