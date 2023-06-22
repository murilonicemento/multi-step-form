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

export const Switch = styled.label`
  margin: 20px auto 0 auto;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    visibility: hidden;
    display: none;
  }

  .check {
    position: relative;
    display: block;
    width: 50px;
    height: 25px;
    background-color: ${colors.primary.marineBlue};
    /* background-image: var(--background-image); */
    background-repeat: no-repeat;
    /* background-position: var(--background-position); */
    cursor: pointer;
    border-radius: 50px;
    overflow: hidden;
    transition: 0.3s;
  }

  img {
    margin-top: 7px;
    margin-left: 140px;
  }
`;
