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
  border: 1px solid black;
  gap: 1rem;

  form {
    width: 90%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
    padding: 1rem;
  }
  .link {
    text-decoration: none;
  }
`;
