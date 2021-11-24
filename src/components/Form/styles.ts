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
       margin-bottom: 52px;
       margin-left: 32px;
   }

   .modalEditar {
       
       .formEdicao {
           display: flex;
           flex-direction: column;
           max-width: 558px;
           height: 70px;
           margin-left: 32px;

           select, label, input, textarea {
               border: 0;
               font: 400 16px Inter, sans-serif;
               color: var(--textcolor-primary);
           }
           .status {
               margin-top: 52px;
           }
           .nomeEmpreendimento{
               margin-top: 49px;
           }
           .tipoImovel{
               margin-top: 56px;
           }
           .cepEmpreendimento{
               margin-top: 49px;
           }
           .endereco{
               margin-top: 42px;
               width: 364px;
               height: 72px;
           }
           .numero{
               margin-top: 44px;
               margin-bottom: 16px;
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

            background: var( --brandcolor);
            color: var(--white);
            font: 400 16px Inter,sans-serif;
            font-style: normal;
            }
       }
    }    
`;