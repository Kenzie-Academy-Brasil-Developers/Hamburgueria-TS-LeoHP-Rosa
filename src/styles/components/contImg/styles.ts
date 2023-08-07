import styled from "styled-components";

export const ContImgStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  gap: 2rem;
  @media (max-width: 600px) {
    display: none;
  }
  span {
    display: flex;
    width: 377px;
    height: 95px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 2px 0.1 black;
    img {
      width: 25rem;
      height: 15rem;
      margin-top: 5rem;
    }
  }
  img {
    width: 182px;
    height: 79px;
  }
`;
