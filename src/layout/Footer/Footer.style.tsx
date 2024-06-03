import styled from "styled-components";

export const FooterStyle = styled.footer`
    text-align: center;
    color: var(--secondary);
    height: 250px;
    padding: 0 .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3 {
        font-size: 1.8em;
        margin-bottom: .5em;
    }
    p:nth-child(2) {
        margin-bottom: 1em;
        font-size: 1.2em;
    }
    span {
        font-weight: bold;
    }
`;