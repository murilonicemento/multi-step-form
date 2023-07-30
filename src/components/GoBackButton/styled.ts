import styled from "styled-components";
import { colors } from "../../config/colors";

export const MyButton = styled.button`
  width: 100px;
  height: 45px;
  position: absolute;
  left: 20px;
  bottom: 10px;
  background-color: ${colors.neutral.white};
  border-radius: 4px;
  cursor: pointer;

  a {
    width: 100px;
    height: 45px;
    display: grid;
    place-items: center;
    text-decoration: none;
    font-weight: 700;
    color: ${colors.neutral.coolGray};
  }

  @media (min-width: 800px) {
    left: 450px;
    bottom: 0;
    border: 1px solid ${colors.neutral.coolGray};
  }
`;
