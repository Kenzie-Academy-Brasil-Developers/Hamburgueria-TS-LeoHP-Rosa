import styled from "styled-components";

export const DivSum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 122px;
  width: 343px;
  border-radius: 0px;
  padding: 16px 8px 0px 8px;
  border-top: 2px solid black;
  @media (max-width: 800px) {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  span {
    color: var(--color-green);
    font-weight: 700;
  }
  button {
    height: 60px;
    width: 343px;
    background-color: var(--grey-1);
    color: var(--grey-2);
    font-weight: 700;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
    border: 0px;
    :hover {
      cursor: pointer;
      background-color: red;
      color: white;
      border: 2px solid white;
    }
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;
