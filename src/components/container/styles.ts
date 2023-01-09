import styled from "styled-components";

export const ContainerUl = styled.ul`
  height: 735px;
  width: 940px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 0.3rem;
    overflow-x: scroll;
    height: 350px;
    flex-direction: row;
    justify-content: flex-start;
  }

  button {
    height: 40px;
    width: 106px;
    border: 2px solid var(--color-green);
    background-color: var(--color-green);
    color: white;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
  }
  figure {
    background-color: var(--grey-1);
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 1rem;

    img {
      display: flex;
      object-fit: scale-down;
      width: 100%;
      height: 200px;
    }
  }
`;
export const ProductList = styled.li`
  height: 346px;
  width: 302px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid var(--grey-2);
  margin-top: 1rem;
  @media (max-width: 800px) {
    height: 346px;
    min-width: 300px;

    border-radius: 5px;

    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoValues = styled.div`
  display: flex;
  height: 196px;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1rem;
  @media (max-width: 800px) {
    padding: 0;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: var(--grey-2);
  }
  h6 {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-green);
  }
`;
