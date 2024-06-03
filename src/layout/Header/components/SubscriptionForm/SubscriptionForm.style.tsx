import styled from "styled-components";

export const SubscriptionFormStyle = styled.div`
  background-color: var(--secondary);
  padding: 2em;
  max-width: 22%;
  p {
    font-size: 1.5em;
    color: var(--text-secondary);
    margin-bottom: 1em;
  }
  @media (max-width: 1048px){
    max-width: 32%;
    p{
      font-size: 1.3em;
    }
  }

  @media (max-width: 769px){
    max-width: 60%;
  }

  @media (max-width: 450px){
    max-width: 70%;
    margin-bottom: 2em;
  }
`;