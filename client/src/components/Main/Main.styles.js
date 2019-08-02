import styled from "styled-components";

export const CenteredMain = styled.main`
  margin: auto;
  display: flex;
  background-color: ${props => props.theme.contentBackground};
  width: 75%;
  height: 75%;
  box-shadow: ${props => props.theme.bs};
`;
