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
  @media (max-width: 450px){
    flex-direction: column;
    margin-bottom: .5em;
    gap: 0;
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
  @media (max-width: 450px){
    img {
      display: none;
    }
    h3 {
      text-align: center;
      font-size: 2.5em;
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

export const DetailDescription03 = styled(DetailDescription)`
  justify-self: flex-start;
  @media (max-width: 450px){
    order: 1;
  }
`;