import styled from "styled-components";
import { colors } from "../../config/colors";

export const MyButton = styled.button`
  width: 100px;
  height: 45px;
  position: absolute;
  right: 20px;
  bottom: 10px;
  background-color: ${colors.primary.marineBlue};
  border-radius: 4px;
  cursor: pointer;

  a {
    width: 100px;
    height: 45px;
    display: grid;
    place-items: center;
    text-decoration: none;
    font-weight: 700;
    color: ${colors.neutral.white};
  }
`;
