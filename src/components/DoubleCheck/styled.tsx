import styled from "styled-components";
import { colors } from "../../config/colors";

export const Purchase = styled.div`
  display: grid;
  gap: 15px;
  background-color: ${colors.primary.pastelBlue};
  margin-bottom: 20px;
  padding: 20px 10px;
  border-radius: 8px;
`;

export const Plan = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      font-weight: 700;
      color: ${colors.primary.marineBlue};
    }

    a {
      font-weight: 400;
      color: ${colors.neutral.coolGray};
      cursor: pointer;
    }
  }

  > span {
    font-weight: 700;
    color: ${colors.primary.marineBlue};
    margin-top: 12px;
  }
`;

export const Divider = styled.div`
  border-top: 1px solid ${colors.neutral.coolGray};
`;

export const AddOns = styled.ul`
  display: grid;
  gap: 12px;

  li {
    display: flex;
    justify-content: space-between;
    list-style-type: none;

    span:first-child {
      color: ${colors.neutral.coolGray};
    }

    span:last-child {
      font-weight: 500;
      color: ${colors.primary.marineBlue};
    }
  }
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span:first-child {
    font-weight: 700;
    color: ${colors.neutral.coolGray};
  }

  span:last-child {
    font-weight: 700;
    color: ${colors.primary.purplishBlue};
  }
`;
