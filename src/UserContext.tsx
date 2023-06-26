import { createContext } from "react";

interface User {
  name: string;
  email: string;
  phone: string;
  plan: string;
  subscriptionType: string;
  AddOns: boolean;
}

const UserContext = createContext<User | null>(null);

export default UserContext;
