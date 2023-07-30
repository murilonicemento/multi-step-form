import { Link, useLocation } from "react-router-dom";
import { MyHeader } from "./styled";
import { colors } from "../../config/colors";

export function Header() {
  const location = useLocation();
  const { pathname } = location;

  const linkStyle = {
    backgroundColor: colors.primary.lightBlue,
    color: colors.primary.marineBlue,
  };

  return (
    <MyHeader>
      <nav>
        <ul>
          {pathname === "/" ? (
            <li>
              <Link to="/" style={linkStyle}>
                1
              </Link>
              <div>
                <span>STEP 1</span>
                <span>YOUR INFO</span>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/">1</Link>
              <div>
                <span>STEP 1</span>
                <span>YOUR INFO</span>
              </div>
            </li>
          )}

          {pathname === "/plan" ? (
            <li>
              <Link to="/plan" style={linkStyle}>
                2
              </Link>
              <div>
                <span>STEP 2</span>
                <span>SELECT PLAN</span>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/plan">2</Link>
              <div>
                <span>STEP 2</span>
                <span>SELECT PLAN</span>
              </div>
            </li>
          )}

          {pathname === "/addOns" ? (
            <li>
              <Link to="/addOns" style={linkStyle}>
                3
              </Link>
              <div>
                <span>STEP 3</span>
                <span>ADD-ONS</span>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/addOns">3</Link>
              <div>
                <span>STEP 3</span>
                <span>ADD-ONS</span>
              </div>
            </li>
          )}

          {pathname === "/finish" || pathname === "/acknowledgment" ? (
            <li>
              <Link to="/finish" style={linkStyle}>
                4
              </Link>
              <div>
                <span>STEP 4</span>
                <span>SUMMARY</span>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/finish">4</Link>
              <div>
                <span>STEP 4</span>
                <span>SUMMARY</span>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </MyHeader>
  );
}
