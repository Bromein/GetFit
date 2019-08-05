import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  font-family: "comfortaa";

  @media (max-width: 600px) {
    width: 100%;
  }

  & > input,
  select {
    margin: 0.5rem;
    width: 90%;
    transition: all 0.2s ease-in-out;

    &:focus {
      width: 100%;
    }
  }

  input {
    padding: 1rem;
    font-size: 2rem;
    height: 3rem;
    border-radius: 4px;
    border: none;
    outline: none;
    &[type="number"]::-webkit-inner-spin-button,
    *[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }

  .error {
    border: 1px solid red;
    color: red;
  }

  .disabled {
    cursor: no-drop;
    background-color: rgba(237, 237, 237, 0.5);
    color: rgba(237, 237, 237, 0.8);
  }

  label {
    color: ${props => props.theme.textColor};
  }

  button {
    margin: 2rem;
    border-radius: 4px;
    height: 4rem;
    font-size: 2rem;
    color: #ededed;
    background: ${props => props.theme.accent};
    width: 60%;
    transition: all 0.1s ease-in;
    border: none;
    &:hover {
      width: 70%;
      height: 4.25rem;
      font-size: 2.25rem;
    }
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 1rem;
`;
