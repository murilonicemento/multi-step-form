import { MyForm, Label, Input } from "./styled";

interface FormProps {
  title: string;
  content: string;
}

export function Form({ title, content }: FormProps) {
  return (
    <MyForm>
      <h1>{title}</h1>
      <p>{content}</p>
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" placeholder="e.g Stephen King" />
      <Label htmlFor="name">Email Address</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="e.g.stephenking@lorem.com"
      />
      <Label htmlFor="name">Phone Number</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="e.g +1 234 567 890"
      />
    </MyForm>
  );
}
