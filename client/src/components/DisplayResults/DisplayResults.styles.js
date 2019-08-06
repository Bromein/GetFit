import styled from "styled-components";

export const Result = styled.div`
  width: 100%;
  display: grid;
  color: ${props => props.theme.textColor};
  justify-content: center;
  place-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    ". result ."
    ". goal ."
    "path path path";

  .results {
    grid-area: result;
    font-size: 5rem;
    font-family: "comfortaa";
    font-weight: 600;
  }
`;

export const GoalCard = styled.div`
  grid-area: path;
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 1230px) {
    flex-direction: column;
    flex: 1;
  }
  section {
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2.5rem;
      background-color: ${props => props.theme.accent};
      border-radius: 4px;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
        box-shadow: ${props => props.theme.bs};
        cursor: pointer;
      }

      span {
        font-size: 2rem;
        font-weight: 600;
      }
      @media (max-width: 1230px) {
        border-radius: 0;
      }
    }
  }
`;
