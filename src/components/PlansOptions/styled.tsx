import styled from "styled-components";
import { colors } from "../../config/colors";

export const Options = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${colors.neutral.lightGray};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
  }

  span:first-child {
    font-weight: 600;
    color: ${colors.primary.marineBlue};
  }

  span:last-child {
    font-weight: 500;
    color: ${colors.neutral.coolGray};
  }

  &:not(last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    border-color: ${colors.primary.purplishBlue};
    transition: border-color 0.3s ease-in-out;
  }
`;

export const Period = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${colors.primary.pastelBlue};
  border-radius: 8px;
`;

export const Switch = styled.label`
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    visibility: hidden;
    display: none;
  }

  span {
    width: 50px;
    height: 24px;
    display: block;
    position: relative;
    background-color: ${colors.primary.marineBlue};
    overflow: hidden;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
  }

  img {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-left: 2px;
  }
`;