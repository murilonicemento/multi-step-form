import styled from "styled-components";
import { colors } from "../../config/colors";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${colors.neutral.alabaster};
  margin: -85px auto;
  padding: 80px 30px;
  border-radius: 8px;

  p {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 25px;
  }
`;
