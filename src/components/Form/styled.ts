import styled from "styled-components";
import { colors } from "../../config/colors";

export const MyForm = styled.form`
  width: 90%;
  margin: -85px auto 0 auto;
  padding: 30px 20px 20px 20px;
  background-color: ${colors.neutral.alabaster};
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  h1 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  p {
    width: 80%;
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media (min-width: 800px) {
    width: 67%;
    height: 100vh;
    position: absolute;
    margin: 0;
    top: 10px;
    right: 10px;
  }
`;
