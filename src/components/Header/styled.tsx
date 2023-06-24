import styled from "styled-components";
import bgSidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../../assets/images/bg-sidebar-desktop.svg";
import { colors } from "../../config/colors";

export const MyHeader = styled.header`
  width: 100%;
  height: 200px;
  background-image: url(${bgSidebarMobile});
  background-size: cover;
  padding: 30px;
  nav {
    display: grid;
    place-items: center;
    ul {
      display: flex;
      gap: 20px;

      li {
        display: grid;
        place-items: center;
        width: 35px;
        height: 35px;
        list-style-type: none;
        border: 1px solid ${colors.primary.lightBlue};
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background-color: ${colors.primary.lightBlue};

          a {
            color: ${colors.primary.marineBlue};
            transition: all 0.2s ease;
          }
        }

        a {
          width: 33px;
          height: 33px;
          display: flex;
          align-items:center;
          justify-content:center;
          font-weight: 700;
          color: ${colors.neutral.magnolia};
          text-decoration: none;
          border-radius: 50%;
        }
      }
    }
  }
`;
