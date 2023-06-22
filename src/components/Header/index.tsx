import { MyHeader } from "./styled";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <MyHeader>
      <nav>
        <ul>
          <Link to="/">1</Link>
          <Link to="/plan">2</Link>
          <Link to="">3</Link>
          <Link to="">4</Link>
        </ul>
      </nav>
    </MyHeader>
  );
}
