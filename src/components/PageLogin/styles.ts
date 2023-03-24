import styled from "styled-components";

export const LeftCont = styled.div`
  height: max-content;
  width: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  box-shadow: 2px 2px 5px 0px rgba(3, 3, 3, 0.2);
  gap: 1rem;
  background-color: white;

  h2 {
    font-size: 18px;
    margin-left: -22rem;
  }

  form {
    width: 90%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  label {
    padding: 0.5rem 1rem;
    background-color: white;
    color: var(--grey-3);
    margin-left: -22rem;
    margin-bottom: -1.7rem;
    border-radius: 1rem;
    z-index: 1;
  }
  p {
    height: 36px;
    width: 327px;
    text-align: center;
  }
  input {
    width: 452px;
    height: 70px;
    font-size: 16px;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 1px solid var(--grey-3);
  }
  .link {
    text-decoration: none;
    :hover {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }
  }
`;
