import { MyButton } from "./styled";

interface ButtonProps {
  content: string;
}

export function Button({ content }: ButtonProps) {
  return <MyButton type="button">{content}</MyButton>;
}
