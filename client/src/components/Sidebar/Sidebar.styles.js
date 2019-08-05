import styled from "styled-components";

export const SideBar = styled.header`
  flex: 0 0 10%;
  background-color: ${props => props.theme.accent};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5rem;
  border-radius: 4px 0 0 4px;
  p {
    color: ${props => (props.theme.lightMode ? "#EDEDED" : "#393939")};
  }

  @media (max-width: 600px) {
    padding: 2rem;
    border-radius: 0;
  }
`;
