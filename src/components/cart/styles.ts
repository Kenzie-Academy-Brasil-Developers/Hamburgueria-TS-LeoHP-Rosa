import styled from "styled-components";

export const CartLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0.8rem;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    width: 100%;
  }
  img {
    width: 25%;
    height: 25%;
    background-color: var(--grey-1);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: -3rem;
    width: 120px;
    height: 66px;
    @media (max-width: 800px) {
      margin-left: 1rem;
    }
    h2 {
      font-size: 16px;
    }
    span {
      font-size: 12px;
      color: black;
    }
  }
  button {
    background-color: transparent;
    border: 0px;
    margin-top: -2rem;
    :hover {
      cursor: pointer;
      transform: scale(1.02);
      font-weight: 700;
      color: red;
    }
  }
`;
export const AsidCart = styled.aside`
  height: 223px;
  max-height: 800px;
  width: 365px;
  background-color: var(--white-1);
  margin-top: 1rem;

  @media (max-width: 800px) {
    width: 90%;
    margin-top: 2rem;
  }
`;
export const DivText = styled.div`
  display: flex;
  height: 65px;
  width: 365px;
  background-color: var(--color-green);
  color: var(--grey-1);
  justify-content: flex-start;
  padding-left: 1rem;
  align-items: center;
  font-weight: 700;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const UlCart = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 158px;
  max-height: max-content;
  background-color: var(--white-1);
  margin-top: 1rem;

  span {
    color: var(--color-green);
  }
`;
export const LiCart = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
