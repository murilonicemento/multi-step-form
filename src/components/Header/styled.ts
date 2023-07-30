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
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: ${colors.neutral.magnolia};
          text-decoration: none;
          border-radius: 50%;
        }

        div {
          display: none;
        }
      }
    }
  }

  @media (min-width: 800px) {
    width: 400px;
    height: 100vh;
    margin: 10px 0 10px 10px;
    background-image: url(${bgSidebarDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px;

    nav {
      display: flex;
      margin-top: 20px;

      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;

        li {
          width: 200px;
          display: flex;
          align-items: center;
          gap: 15px;
          border: none;
          border-radius: 0;
          cursor: auto;

          &:hover {
            background-color: transparent;

            a {
              background-color: ${colors.primary.lightBlue};
            }
          }

          a {
            width: 33px;
            height: 33px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: ${colors.neutral.magnolia};
            text-decoration: none;
            border-radius: 50%;
            border: 1px solid;
          }

          div {
            display: flex;
            flex-direction: column;
            gap: 5px;

            span:first-child {
              color: ${colors.neutral.lightGray};
            }

            span:last-child {
              font-weight: 500;
              letter-spacing: 1px;
              color: ${colors.neutral.alabaster};
            }
          }
        }
      }
    }
  }
`;
