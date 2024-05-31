import styled from "styled-components";

export const BeneficiosStyle = styled.section`
    h2{
       background-color: var(--secondary); 
       text-align: center;
       padding: 2em;
       font-weight: 500;
    }
    
`;

export const BeneficiosList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4em;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 450px){
    flex-direction: column;
    align-items: center;
    width: auto;
    padding: 2em;
  }
`;

export const BeneficioContainer = styled.div`
  
`;

export const Beneficio = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  color: var(--text-terciary);
  .beneficioImgContainer{
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin-bottom: 1em;
    overflow: hidden;
    
  }
  .beneficioImg {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    transition: .8s;
  }
  #beneficio-1 {
    background-image: url("/img/sqr-1.jpg");
  }
  #beneficio-2 {
    background-image: url("/img/sqr-2.jpg");
  }
  #beneficio-3 {
    background-image: url("/img/sqr-3.jpg");
  }
  .beneficioImg:hover{
    transform: scale(1.2);
  }
  @media (max-width: 450px){
    max-width: 100%;
    margin-bottom: 2em;
  }
`;