import styled from "styled-components";

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
export const AppDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LoginStyle = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
