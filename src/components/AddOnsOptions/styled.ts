import styled from "styled-components";
import checkmark from "../../assets/images/icon-checkmark.svg";
import { colors } from "../../config/colors";

export const Options = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid ${colors.neutral.lightGray};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primary.lightBlue};
    border-color: ${colors.primary.marineBlue};
    transition: all 0.3s ease;
  }

  /* Esconder o checkbox padrão */
  input[type="checkbox"] {
    display: none;
  }

  /* Estilizar o rótulo do checkbox */
  label {
    display: inline-block;
    position: relative;
    /* padding-left: 25px; Espaço para a imagem de check */
    cursor: pointer;
  }

  /* Estilizar o fundo do checkbox */
  label:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: ${colors.neutral.white};
    border: 1px solid ${colors.neutral.lightGray};
    border-radius: 8px;
  }

  /* Estilizar a image check */
  label:after {
    content: url(${checkmark});
    position: absolute;
    width: 10px;
    height: 10px;
    left: 8px;
    top: 4px;
    opacity: 0;
  }

  /* Mudar a aparência do checkbox quando marcado */
  input[type="checkbox"]:checked + label:before {
    background-color: ${colors.primary.purplishBlue};
  }

  /* Mostrar a imagem de check quando o checkbox está marcado */
  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 15px;

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      span:first-child {
        font-size: 16px;
        font-weight: 700;
        color: ${colors.primary.marineBlue};
      }

      span:last-child {
        font-size: 14px;
        font-weight: 500;
        color: ${colors.neutral.coolGray};
      }
    }
  }

  span:last-child {
    font-weight: 500;
    color: ${colors.primary.marineBlue};
  }

  &:not(last-child) {
    margin-bottom: 10px;
  }
`;

export const MyButton = styled.button`
  width: 100px;
  height: 45px;
  position: absolute;
  right: 20px;
  bottom: 10px;
  background-color: ${colors.primary.marineBlue};
  border-radius: 4px;
  cursor: pointer;

  span {
    width: 100px;
    height: 45px;
    display: grid;
    place-items: center;
    text-decoration: none;
    font-weight: 700;
    color: ${colors.neutral.white};
  }
`;
