import { createContext, useContext } from "react";

export interface GlobalContent {
  name: string;
  email: string;
  phoneNumber: string;
  plan: string;
  planType: string;
  monthly: boolean;
  addOns?: string[];
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setPlan: (plan: string) => void;
  setPlanType: (planType: string) => void;
  setIsMonthly: (isMonthly: boolean) => void;
  setAddOns: (addOns: string[]) => void;
}

export const MyGlobalContext = createContext({
  name: "",
  email: "",
  phoneNumber: "",
  plan: "",
  planType: "Arcade",
  monthly: true,
  addOns: [""],
  setName: (name: string) => {},
  setEmail: (email: string) => {},
  setPhoneNumber: (phoneNumber: string) => {},
  setPlan: (plan: string) => {},
  setPlanType: (planType: string) => {},
  setMonthly: (monthly: boolean) => {},
  setAddOns: (addOns: string[]) => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
