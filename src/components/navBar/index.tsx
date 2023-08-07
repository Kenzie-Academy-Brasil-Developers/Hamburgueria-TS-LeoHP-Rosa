import { useContext } from "react";
import { GrLogout } from "react-icons/gr";
import { CartContext } from "../../context/CartContext";
import { BtnRemove, DivTitle, Navbar, NavDivStyle } from "./styles";

const NavBar = ({}) => {
  const { filters, submit, active, clearFilter, btnLogout } =
    useContext(CartContext);

  return (
    <NavDivStyle>
      <Navbar>
        <DivTitle className="title">
          <h2>Burguer</h2>
          <h3> Kenzie</h3>
        </DivTitle>
        <div className="newBtn">
          <div className="inputSearch">
            <input
              type="text"
              placeholder="Digite o Item"
              onChange={(event) => filters(event.target.value)}
            ></input>
            <button onClick={() => submit()}>Pesquisar</button>
          </div>
          <button className="logout" onClick={() => btnLogout()}>
            <GrLogout className="svgIcon" />
          </button>
        </div>
      </Navbar>
      {active ? (
        <BtnRemove onClick={() => clearFilter()}>Limpar Pesquisa</BtnRemove>
      ) : (
        <></>
      )}
    </NavDivStyle>
  );
};

export default NavBar;
