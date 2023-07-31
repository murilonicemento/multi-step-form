import styled from "styled-components";
import { colors } from "../../config/colors";

export const Label = styled.label`
  color: ${colors.primary.marineBlue};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 20px;
  border: 1px solid ${colors.neutral.lightGray};
  border-radius: 4px;
  font-weight: 600;
  color: ${colors.primary.marineBlue};
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${colors.primary.marineBlue};
    transition: border-color 0.2s ease;
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
