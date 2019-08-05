import styled from "styled-components";

export const Result = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  place-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    ". result ."
    ". goal ."
    "path path path";

  .results {
    grid-area: result;
  }

  span {
    grid-area: goal;
  }
`;
