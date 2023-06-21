import { createGlobalStyle } from "styled-components";
import { colors } from "../config/colors";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background-color: ${colors.primary.pastelBlue};
    font-family: "Ubuntu", Arial, sans-serif;
    font-size: 16px;
  }

  h1 {
    color: ${colors.primary.marineBlue};
  }

  p {
    color: ${colors.neutral.coolGray};
  }

  input::placeholder {
    color: ${colors.neutral.coolGray};
  }
  
  button {
    background-color: ${colors.primary.marineBlue};
    color: ${colors.neutral.white};
  }
`;
