import styled from "styled-components";

export const DisclamerStyle = styled.div`
  h2 {
    color: var(--primary);
    font-size: 3em;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.2em;
    margin-bottom: .3em;
  }

  .aboutEvent {
    font-size: 2em;
    text-transform: uppercase;
    max-width: 350px;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .eventDate {
    color: var(--primary);
    font-weight: bold;
  }

  @media (max-width: 450px){
    padding: 2em;
    h2 {
      margin-bottom: .5em;
    }
  }

  
`;