import styled from "styled-components";

export const DetalhesStyle = styled.section`
  width: 80%;
  margin: 0 auto;
`;

export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 5%;
  margin-bottom: 4em;
  .detailImgContainer{
    width: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
    transition: .8s;
  }

  img:hover {
    transform: scale(1.2)
  }

  h3 {
    margin-bottom: 1em;
    font-size: 2em;
    font-weight: 500;
  }
  
  @media (max-width: 769px){
    h3{
      font-size: 1.4em;
      margin-bottom: .5em;
    }
  }

  @media (max-width: 625px){
    flex-direction: column;
    margin-bottom: .5em;
    gap: 0;
    h3{
      margin-bottom: .8rem;
    }
    .detailImgContainer {
      width: 100%;
      margin: 2em 0;
    }
  }
`;

export const Detail01 = styled(Detail)`
  h3 {
    font-size: 3em;
    font-weight: 700;
  }
  
  @media (max-width: 1200px){
    h3 {
      font-size: 2.5em;
    }
  }
  @media (max-width: 1048px){
    h3 {
      font-size: 2.3em;
    }
  }
  @media (max-width: 969px){
    h3 {
      font-size: 2em;
    }
  }

  @media (max-width: 769px){
    h3 {
      font-size: 1.4em;
    }
  }

  @media (max-width: 625px){
    display: flex;
    flex-direction: column;  
    align-items: center; 
    img {
      display: none;
    }
    h3 {
      text-align: center;
      font-size: 2em;
      margin-bottom: .5rem;
    }
  }
  @media (max-width: 450px){
    margin: 1rem 0;
    .detailImgContainer {
      margin: 0;
    }
  }
`;

export const Detail03 = styled(Detail)`
  @media (max-width: 450px){
    .detailImgContainer {
      order: 2;
    }
  }
`;

export const DetailDescription = styled.div`
  width: 100%;
  padding-left: 2em;
  ul {
    list-style-position: inside;
  }
  li {
    margin-bottom: 0.4em;
  }
  li:last-child {
    font-weight: bold;
  }
  @media (max-width: 450px){
    padding: 0;
  }
`;

export const DetailDescription01 = styled(DetailDescription)`
  @media (max-width: 625px){
    padding-left: 0;
  }
`;


export const DetailDescription03 = styled(DetailDescription)`
  justify-self: flex-start;
  @media (max-width: 450px){
    order: 1;
  }
`;
