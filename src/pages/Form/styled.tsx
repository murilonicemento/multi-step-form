import styled from "styled-components";
import { colors } from "../../config/colors";

export const MyForm = styled.form`
  width: 90%;
  margin: auto;
  padding: 20px;
  background-color: ${colors.neutral.alabaster};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  color: ${colors.primary.marineBlue};
`;

export const Input = styled.input`
  width: 90%;
  height: 20px;
  padding: 20px;
  border: 1px solid ${colors.neutral.lightGray};
`;
