import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Button } from "../components/Button";

export function Plan() {
  return (
    <>
      <Header />
      <Form
        title="Select your plan"
        content="You have the option of monthly or yearly billing."
      />
      {/* <Button content="Go Back" /> */}
      <Button content="Next Step" />
    </>
  );
}
