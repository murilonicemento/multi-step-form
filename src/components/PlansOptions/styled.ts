import styled from "styled-components";
import { colors } from "../../config/colors";

export const OptionArcade = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${colors.neutral.lightGray};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  div {
    display: flex;
    flex-direction: column;
  }

  span:first-child {
    font-weight: 700;
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
    background-color: ${colors.primary.pastelBlue};
    border-color: ${colors.primary.purplishBlue};
    transition: all 0.3s ease-in-out;
  }
`;

export const OptionAdvanced = styled(OptionArcade)``;

export const OptionPro = styled(OptionArcade)``;

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

interface SwitchProps {
  htmlFor: string;
  monthly: any;
}

export const Switch = styled.label<SwitchProps>`
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
    margin-left: ${(props) => (props.monthly ? "2px" : "28px")};
    transition: margin-left 0.3s ease;
  }
`;

interface SpanProps {
  monthly: any;
}

export const Span = styled.span<SpanProps>`
  font-weight: 500;
  &:first-child {
    color: ${(props) =>
      props.monthly ? colors.primary.marineBlue : colors.neutral.coolGray};
  }

  &:last-child {
    color: ${(props) =>
      props.monthly ? colors.neutral.coolGray : colors.primary.marineBlue};
  }
`;
