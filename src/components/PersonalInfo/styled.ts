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
`;
