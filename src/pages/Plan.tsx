import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { GoBackButton } from "../components/GoBackButton";

export function Plan() {
  return (
    <>
      <Header />
      <Form
        title="Select your plan"
        content="You have the option of monthly or yearly billing."
      />
      <div>
        <GoBackButton pathname="/" content="Go Back" />
      </div>
    </>
  );
}
