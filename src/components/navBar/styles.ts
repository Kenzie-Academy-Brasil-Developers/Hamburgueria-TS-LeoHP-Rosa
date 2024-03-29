import styled from "styled-components";

export const BtnRemove = styled.button`
  display: block;
  padding: 1rem;
  position: absolute;
  top: 8rem;
  right: 35rem;
  border-radius: 0.5rem;
  border: 0px;

  :hover {
    cursor: pointer;
    display: block;
    padding: 1rem;
    color: white;
    background-color: red;
    border: 1px solid red;
    font-weight: 700;
  }
  @media (max-width: 800px) {
    display: block;
    top: 7.5rem;
    right: 8rem;
  }
`;
export const Navbar = styled.div`
  height: 80px;

  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: rgba(206, 209, 211, 0.607);
  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: column;
    height: max-content;
    gap: 1rem;
    align-items: center;
    padding: 0;
  }
  .newBtn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .logout {
    width: 50px;
    height: 60px;
    background-color: rgba(206, 209, 211, 0.607);
    margin-right: -20px;
    margin-left: 2px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(206, 209, 211, 0.607);
    :hover {
      border: 1px solid red;
      transform: scale(1.02);
      cursor: pointer;
      background-color: red;
      .svgIcon {
        path {
          stroke: white;
        }
      }
    }
  }
  .svgIcon {
    font-size: 20px;
  }
  .inputSearch {
    height: 60px;
    width: 365px;
    border-radius: 8px;
    padding: 0px 5px 0px 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid rgba(128, 128, 128, 0.3);

    @media (max-width: 800px) {
      width: 95%;
    }
  }
  .inputSearch button {
    height: 40px;
    width: 107px;
    color: white;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
    border: 2px solid #27ae60;
    background-color: #27ae60;
  }
  .inputSearch input {
    background-color: transparent;
    border: transparent;
    height: 40px;
    font-weight: 400;
  }
  .inputSearch input:focus {
    border: 0px solid transparent;
    box-shadow: 0 0 0 0;
    outline: 0;
    color: #27ae60;
    font-weight: 800;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-weight: 900;

  h3 {
    margin-top: 13px;
    color: #eb5757;
  }
`;

export const NavDivStyle = styled.div`
  display: flex;
  width: 100vw;
`;
