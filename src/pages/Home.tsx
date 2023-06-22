import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Button } from "../components/Button";

export function Home() {
  return (
    <>
      <Header />
      <Form
        title="Personal info"
        content="Please provide your name, email, address and phone number."
      />
      <Button content="Next Step" />
    </>
  );
}
