import styled from "styled-components";

export const FormularioStyle = styled.form`
  
`;


export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8em;
    label {
        color: var(--text-terciary);
        margin-bottom: .3em;
        font-weight: bold;
    }
    input {   
        padding: 6px 8px;
        border-radius: 5px;
        border: none;
        outline: none;
    }
    select {
        padding: 6px 8px;
        border-radius: 5px;
        border: none;
        outline: none;
    }
`;

export const ButtonSubmit = styled.button`
    background-color: var(--primary);
    color: var(--text-color);
    text-transform: uppercase;
    width: 100%;
    border: none;
    padding: 12px;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
    @media (max-width: 450px){
        opacity: 1;
    }
`;