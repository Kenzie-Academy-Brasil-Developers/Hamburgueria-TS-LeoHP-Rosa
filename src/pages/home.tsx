import CartProducts from "../components/cart";
import Container from "../components/container";
import NavBar from "../components/navBar";
import { DivMain } from "../styles/styles";

const HomePage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <DivMain className="main">
        <Container></Container>
        <CartProducts></CartProducts>
      </DivMain>
    </div>
  );
};

export default HomePage;
