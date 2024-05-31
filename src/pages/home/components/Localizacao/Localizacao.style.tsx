import styled from "styled-components";

export const LocalizacaoStyle = styled.section`
    height: 400px;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("../img/hrz-1.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: var(--text-color);
    margin-bottom: 3em;

    @media (max-width: 450px){
        flex-direction: column;
        height: auto;
        text-align: center;
        padding: 2em 0;
        margin-bottom: 0;
    }
`;

export const Adress = styled.div`
    max-width: 30%;
    display: flex;
    svg {
        color: var(--primary);
        font-size: 4em;
        margin-right: 0.5em;
    }
    #adressDetails {
        text-align: center;
        font-size: 1.3em;
    }
    @media (max-width: 450px){
        order: 2;
        flex-direction: column;
        max-width: 100%;
        svg {
            margin: .3em auto;
        }
    }
`;

export const aboutLocation = styled.div`
    max-width: 30%;
    h3{
        color: var(--primary);
        font-size: 2.5em;
        margin-bottom: 1em;
        text-transform: uppercase;
    }
    p {
        line-height: 1.5em;
    }
    @media (max-width: 450px){
        order: 1;
        max-width: 100%;
        h3 {
            margin-bottom: 0;
        }
        p {
            display: none;
        }
    }
`;