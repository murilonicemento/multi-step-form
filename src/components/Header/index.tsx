import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MyHeader } from "./styled";
import { colors } from "../../config/colors";

export function Header() {
  return (
    <MyHeader>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={(isActive) => ({
                backgroundColor: isActive ? colors.neutral.lightBlue : "",
                color: isActive ? colors.primary.marineBlue : colors.neutral.magnolia,
              })}
            >
              1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plan"
              style={(isActive) => ({
                color: isActive ? colors.primary.marineBlue : colors.neutral.magnolia,
              })}
            >
              2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addOns"
              style={(isActive) => ({
                color: isActive ? colors.primary.marineBlue : colors.neutral.magnolia,
              })}
            >
              3
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finish"
              style={(isActive) => ({
                color: isActive ? colors.primary.marineBlue : colors.neutral.magnolia,
              })}
            >
              4
            </NavLink>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
    </MyHeader>
  );
}
