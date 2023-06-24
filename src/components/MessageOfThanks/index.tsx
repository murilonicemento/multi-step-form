import thankYou from "../../assets/images/icon-thank-you.svg";
import { Container } from "./styled";

export function MessageOfThanks() {
  return (
    <Container>
      <img src={thankYou} alt="Icon Thank You" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </Container>
  );
}
