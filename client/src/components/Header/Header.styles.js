import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  p {
    padding: 1rem;
    margin: 0;
    color: ${props => props.theme.textColor};
  }
`;
