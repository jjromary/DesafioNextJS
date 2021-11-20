import styled from "styled-components";

export const Container = styled.div`
    max-width: 1140px;
    height: 114px;
    border-radius: 8px;
    filter: drop-shadow(0px, 2px 4px rgba(48, 46, 69, 0.06));
    background: var(--white);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .esquerda{
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        margin-left: 32px;

        .nomeEmpreendimento{
            display: flex;
            align-items: center;
            flex-direction: row;

            strong{
                font-family: Inter, sans-serif;
                font-weight: bold;
                font-size: 20px;
                color: var(--textcolor-primary)
            }
            
            input{
                margin-left: 18px;
            }               
        }

        .enderecoEmpreendimento {
            p{
                font-family: Inter, sans-serif;
                font-weight: normal;
                font-size: 14px;
                color: var(--textcolor-secondary);

                margin-top: 16px
            }
        }
    }

    .direita {
        display: flex;
        flex-direction: row;
        align-items: center;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 113px;
            height: 28px;
            border: solid 1px;
            border-color: var(--brandcolor-light);
            border-radius: 71px;

            font-family: Inter, sans-serif;
            font-weight: normal;
            font-size: 14px;
            color: var(--textcolor-primary)
        }
        
        .tagLancamento {
            margin-right: 16px;        
        }
        .tagTipoLancamento {
            margin-right: 32px;
        }
    }
`;