import styled from "styled-components";

export const Container = styled.div`
    margin-top: 85px;
    


.card { 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--white);
    margin-top: 32px;
    max-width: 1140px;
    height: 114px;
    border-radius: 8px;
    filter: drop-shadow(0px, 2px 4px rgba(48, 46, 69, 0.06));

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
            
            .iconeEditar{
                margin-left: 18px;
            }
            .iconeDeletar{
                margin-left: 18px;
            }               
        }

        .enderecoEmpreendimento {
            display: flex;
            flex-direction: row;
            align-items: center;
            p{
                font-family: Inter, sans-serif;
                font-weight: normal;
                font-size: 14px;
                color: var(--textcolor-secondary);

                margin-top: 16px;
                margin-bottom: 32px;
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
}
`;