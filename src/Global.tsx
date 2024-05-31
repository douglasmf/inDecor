import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
    --primary: #eb1ccc;
    --secondary: #95989a;
    --text-color: #fff;
    --text-secondary: #000;
    --text-terciary: #5d5d5d;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
  }
`;