import styled from "styled-components";

export const ButtonGreen = styled.button`
  height: 60px;
  width: 452px;
  border-radius: 8px;
  background-color: var(--color-green);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid var(--color-green);
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 90vw;
  }
`;
export const GreyButton = styled.button`
  height: 60px;
  width: 452px;
  border-radius: 8px;
  padding: 0px 40px 0px 40px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  background-color: var(--grey-1);
  border: 1px solid var(--grey-1);
  color: var(--grey-2);
  :hover {
    color: 1px solid var(--black);
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 90vw;
  }
`;
