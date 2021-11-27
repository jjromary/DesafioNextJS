import styled from "styled-components";

export const Container = styled.header`
  background: var(--white);
`;

export const Content = styled.div`
  max-width: 1440px;
  height: 80px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font: 700 24px Montserrat, sans-serif;
    font-style: normal;
    color: var(--brandcolor);
    margin-left: 150px;
    margin-top: 28px;
    margin-bottom: 28px;
  }

  button {
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

    background: var(--brandcolor);
    color: var(--white);
    font: 700 16px Inter, sans-serif;
    font-style: normal;
    a{
      margin-left: 8px;

    }
  }
`;
