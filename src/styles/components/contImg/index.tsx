import { DivTitle } from "../../../components/navBar/styles";
import { ContImgStyle } from "./styles";

const ContImg = () => {
  return (
    <ContImgStyle>
      <DivTitle className="title">
        <h2>Burguer</h2>
        <h3> Kenzie</h3>
      </DivTitle>
      <span>
        <img src="item.png" alt="" />
      </span>
      <img src="Group 135.svg" alt="" />
    </ContImgStyle>
  );
};

export default ContImg;
