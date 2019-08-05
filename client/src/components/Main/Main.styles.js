import styled from "styled-components";

export const CenteredMain = styled.main`
  margin: auto;
  display: flex;
  border-radius: 4px;
  background-color: ${props => props.theme.contentBackground};
  width: 75%;
  height: 75%;
  box-shadow: ${props => props.theme.bs};
  transition: all 0.2s ease-in;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
