import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../hooks/useGlobalContext.js";
import { Label, Input, MyButton } from "./styled";

export function PersonalInfo() {
  const { name, email, phoneNumber, setName, setEmail, setPhoneNumber } =
    useGlobalContext();
  const { register, setFocus } = useForm();
  const navigate = useNavigate();

  function verifyForm(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (!name.length) return alert("Name is required!");
    if (!email.length) return alert("E-mail is required!");
    if (!phoneNumber.length) return alert("Phone Number is required!");

    navigate("/plan");
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
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <Label htmlFor="name">Email Address</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="e.g.stephenking@lorem.com"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <Label htmlFor="name">Phone Number</Label>
      <Input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="e.g +1 234 567 890"
        value={phoneNumber}
        onChange={(event) => {
          setPhoneNumber(event.target.value);
        }}
      />

      <MyButton onClick={verifyForm}>
        <span>Next Step</span>
      </MyButton>
    </>
  );
}
