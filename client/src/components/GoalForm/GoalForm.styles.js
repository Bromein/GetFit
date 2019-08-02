import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 5rem;
  justify-content: center;
  align-items: center;

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

  label {
    color: ${props => props.theme.textColor};
  }

  button {
    border-radius: 4px;
    height: 4rem;
    font-size: 2rem;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.accent};
    width: 90%;
    transition: all 0.2s ease-in;
    border: none;
    &:hover {
      width: 100%;
    }
  }
`;
