import styled from "styled-components";

export const ContImgStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  gap: 2rem;
  span {
    display: flex;
    width: 377px;
    height: 95px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 2px 0.1 black;
    img {
      width: 90%;
      height: 90%;
    }
  }
  img {
    width: 182px;
    height: 79px;
  }
`;
