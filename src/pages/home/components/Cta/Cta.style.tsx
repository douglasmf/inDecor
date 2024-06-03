import styled from "styled-components";

export const CtaStyle = styled.section`
    height: 300px;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/img/hrz-6.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: var(--text-color);
    h3 {
        margin-bottom: 1.2em;
        font-size: 2em;
        font-weight: 500;
    }
    button {
        background-color: var(--primary);
        color: var(--text-color);
        font-weight: 600;
        font-size: 1.2em;
        text-transform: uppercase;
        width: 30%;
        margin: 0 auto;
        border: none;
        padding: 12px;
        cursor: pointer;
        opacity: 0.8;
        &:hover {
            opacity: 1;
        }
    }
    @media (max-width: 769px){
        button{
            width: 50%;
        }
    }
    @media (max-width: 469px){
        padding: 0 .5rem;
        button {
            width: 80%;
            opacity: 1;
        }
    }
`;