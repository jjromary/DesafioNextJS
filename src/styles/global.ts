import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
 :root {
     --white: #FFFFFF;
     --background: #f8f7fc;
     --brandcolor: #4F46BB;
     --brandcolor-light: #8E85FF;
     --outline-gray-dark: #BBB8D9;
     --textcolor-primary: #302E45;
     --textcolor-secondary: #6D6C7B;
 }
 
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    font: 400 14px Inter, sans-serif;
    max-width: 1440px;
    margin: 0 auto;
 }

 button {
     cursor: pointer;
 }
 
 a {
     color: inherit;
     text-decoration: none;
 }

`