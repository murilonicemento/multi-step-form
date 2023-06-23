import { Header } from "../components/Header";
import { Form } from "../components/Form";


export function AddOns() {
  return (
    <>
      <Header/>
      <Form 
        title="Pick add-ons" 
        content="Add-ons help enhance your gaming experience." 
      />
      <div>
        <GoBackButton pathname="/plan" content="Go Back" />
        <NextStepButton pathname="/addOns" content="Next Step" />
      </div>
    </>
  );
}