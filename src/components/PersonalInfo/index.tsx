import { useGlobalContext } from "../../hooks/useGlobalContext.js";
import { useForm } from "react-hook-form";
import { Label, Input } from "./styled";
import { useEffect } from "react";

export function PersonalInfo() {
  const { name, email, phoneNumber, setName, setEmail, setPhoneNumber } =
    useGlobalContext();
  const { register, setFocus } = useForm();

  function validateInputs(event: {
    preventDefault: () => void;
    target: { value: string };
  }) {
    event.preventDefault();
    if (event.target.value === "") {
      alert("Fill in all fields");
    }
  }

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <>
      <Label htmlFor="name">Name</Label>
      <Input
        {...register("name")}
        type="text"
        name="name"
        id="name"
        placeholder="e.g Stephen King"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onBlur={validateInputs}
      />

      <Label htmlFor="name">Email Address</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="e.g.stephenking@lorem.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={validateInputs}
      />

      <Label htmlFor="name">Phone Number</Label>
      <Input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="e.g +1 234 567 890"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        onBlur={validateInputs}
      />
    </>
  );
}
