import { createContext, useContext } from "react";

export type GlobalContent = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
  isMonthly: boolean;
  addOns?: string[];
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setPlan: (plan: string) => void;
  setIsMonthly: (isMonthly: boolean) => void;
  setAddOns: (addOns: string[]) => void;
};

export const MyGlobalContext = createContext({
  name: "",
  email: "",
  phoneNumber: "",
  plan: "",
  isMonthly: true,
  addOns: [""],
  setName: (name: string) => {},
  setEmail: (email: string) => {},
  setPhoneNumber: (phoneNumber: string) => {},
  setPlan: (plan: string) => {},
  setIsMonthly: (isMonthly: boolean) => {},
  setAddOns: (addOns: string[]) => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
