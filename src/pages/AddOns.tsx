import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { GoBackButton } from "../components/GoBackButton";
import { NextStepButton } from "../components/NextStepButton";

export function AddOns() {
  return (
    <>
      <Header />
      <Form
        title="Pick add-ons"
        content="Add-ons help enhance your gaming experience."
      />
      <div>
        <GoBackButton pathname="/plan" content="Go Back" />
        <NextStepButton pathname="/finish" content="Next Step" />
      </div>
    </>
  );
}
