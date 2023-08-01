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
    width: 90%;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 25px;
  }

  @media (min-width: 800px) {
    width: 67%;
    height: 100vh;
    position: absolute;
    margin: 0;
    top: 10px;
    right: 10px;

    img {
      width: 20%;
    }
  }
`;
