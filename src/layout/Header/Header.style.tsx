import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url("/img/hrz-5.jpg");
  background-position: center;
  background-size: cover;
  height: 85vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--text-color);

  @media (max-width: 769px){
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
  }
`;
