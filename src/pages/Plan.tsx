import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { NextStepButton } from "../components/NextStepButton";
import { GoBackButton } from "../components/GoBackButton";

export function Plan() {
  const divButtonsStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <>
      <Header />
      <Form
        title="Select your plan"
        content="You have the option of monthly or yearly billing."
      />
      <div>
        <GoBackButton pathname="/" content="Go Back" />
        <NextStepButton pathname="/addOns" content="Next Step" />
      </div>
    </>
  );
}
