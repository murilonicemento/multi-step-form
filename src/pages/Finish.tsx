import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { GoBackButton } from "../components/GoBackButton";
import { NextStepButton } from "../components/NextStepButton";

export function Finish() {
  return (
    <>
      <Header />
      <Form
        title="Finishing up"
        content="Double-check everything looks OK before confirming."
      />
      <div>
        <GoBackButton pathname="/addOns" content="Go Back" />
        <NextStepButton pathname="/acknowledgment" content="Confirm" />
      </div>
    </>
  );
}
