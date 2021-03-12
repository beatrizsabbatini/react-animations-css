import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button, h1{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }

  h1{
    color: #cccccc;
    text-transform: uppercase;
    padding: 5vh 0;
    font-size: 30px;
  }

  button{
    cursor: pointer
  }
`;
