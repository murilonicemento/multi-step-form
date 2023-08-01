import { useLocation } from "react-router-dom";
import { PersonalInfo } from "../PersonalInfo";
import { PlansOptions } from "../PlansOptions";
import { AddOnsOptions } from "../AddOnsOptions";
import { DoubleCheck } from "../DoubleCheck";
import { MessageOfThanks } from "../MessageOfThanks";
import { MyForm } from "./styled";

interface FormProps {
  title: string;
  content: string;
}

export function Form({ title, content }: FormProps) {
  const location = useLocation();
  const { pathname } = location;

  function handleRenderForm(pathname: string) {
    switch (pathname) {
      case "/":
        return <PersonalInfo />;
      case "/plan":
        return <PlansOptions />;
      case "/addOns":
        return <AddOnsOptions />;
      case "/finish":
        return <DoubleCheck />;
      case "/acknowledgment":
        return <MessageOfThanks />;
      default:
        break;
    }
  }

  return (
    <MyForm>
      <h1>{title}</h1>
      <p>{content}</p>
      {handleRenderForm(pathname)}
    </MyForm>
  );
}
