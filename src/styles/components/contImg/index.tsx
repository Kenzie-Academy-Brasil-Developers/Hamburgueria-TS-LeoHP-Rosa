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
        <img src="Group 141.svg" alt="" />
      </span>
    </ContImgStyle>
  );
};

export default ContImg;
