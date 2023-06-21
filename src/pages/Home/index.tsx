import { Header } from "../Header";
import { Form } from "../Form";

export function Home() {
  return (
    <>
      <Header />
      <Form
        title="Personal info"
        content="Please provide your name, email, address and phone number"
      />
    </>
  );
}
