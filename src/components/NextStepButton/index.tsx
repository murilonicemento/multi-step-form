import { Link } from "react-router-dom";
import { MyButton } from "./styled";

interface ButtonProps {
  pathname: string;
  content: string;
}

export function NextStepButton({ pathname, content }: ButtonProps) {
  return (
    <MyButton>
      <Link to={pathname}>{content}</Link>
    </MyButton>
  );
}
