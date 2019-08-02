import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  background-color: ${props => props.theme.contentBackground};
  color: ${props => props.theme.textColor};
  z-index: 500;

  button {
    border-radius: 4px;
  }
`;
