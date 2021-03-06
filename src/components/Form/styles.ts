import styled from "styled-components";

export const Container = styled.div`
  max-width: 622px;
  height: 606px;
  background: var(--white);
  margin: 0 auto;
  margin-top: 48px;
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  header {
    font: 700 18px Inter, sans-serif;
    color: var(--textcolor-primary);
    margin-top: 32px;
    margin-left: 32px;
  }

  .modalEditar {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    padding: 0;
    max-width: 622px;
    height: 606px;
    margin-left: 32px;
    margin-top: 32px;

    select,
    label,
    input,
    textarea {
      border: 0;
      font: 400 16px Inter, sans-serif;
      color: var(--textcolor-primary);
    }

    .containerStatus {
      display: flex;
      flex-direction: column;
      max-width: 558px;
      height: 70px;

      .status {
        margin-top: 20px;
        margin-bottom: 16px;
      }
    }

    .containerNomeEmpreenddimento {
      display: flex;
      flex-direction: column;
      max-width: 558px;
      height: 70px;
      margin-top: 16px;

      .nomeEmpreendimento {
        margin-top: 20px;
        margin-bottom: 16px;
      }
    }

    .containerTipoImovel {
      display: flex;
      flex-direction: column;
      max-width: 558px;
      height: 70px;
      margin-top: 16px;

      .tipoImovel {
        margin-top: 20px;
        margin-bottom: 16px;
      }
    }

    .containerCep {
      display: flex;
      flex-direction: column;
      max-width: 558px;
      height: 70px;
      margin-top: 16px;

      .cepEmpreendimento {
        margin-top: 20px;
        margin-bottom: 16px;
      }
    }

    .containerAddress {
      display: flex;
      flex-direction: column;
      max-width: 364px;
      height: 72px;
      margin-top: 20px;
      margin-bottom: 16px;

      .endereco {
        font-size: 14px;
      }
    }
    .containerNumero {
      display: flex;
      flex-direction: column;
      max-width: 558px;
      height: 70px;
      margin-top: 16px;
      margin-bottom: 32px;
      .numero {
        margin-top: 20px;
        margin-bottom: 16px;
      }
    }

    .cadastar {
      width: 159px;
      height: 36px;
      margin: 0 auto;
      margin-top: 38px;
      border: 0px;
      border-radius: 71px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--brandcolor);
      color: var(--white);
      font: 400 16px Inter, sans-serif;
      font-style: normal;
    }
  }
`;
