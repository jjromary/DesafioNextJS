import styled from "styled-components";

export const Container = styled.main`
    max-width: 1140px;
    margin: 0 auto;
`;

export const Content= styled.div`
    display: flex;
    justify-content: center;
    button{
        width: 176px;
        height: 36px;
        margin-right: 150px;
        margin-top: 22px;
        margin-bottom: 22px;
        border-radius: 71px;
        border: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background: var( --brandcolor);
        color: var(--white);
        font: 700 16px Inter,sans-serif;
        font-style: normal;
    }
`;