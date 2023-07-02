import { useState } from "react";
import { Label, Input } from "./styled";

export function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    <>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="e.g Stephen King"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Label htmlFor="name">Email Address</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="e.g.stephenking@lorem.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Label htmlFor="name">Phone Number</Label>
      <Input
        type="number"
        name="name"
        id="name"
        placeholder="e.g +1 234 567 890"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
    </>
  );
}
