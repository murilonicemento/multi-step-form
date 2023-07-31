/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from "react";

export interface AddOnsArray {
  addOnsType: string;
  isSelected: boolean;
  price: number;
}

export interface GlobalContent {
  name: string;
  email: string;
  phoneNumber: string;
  plan: number;
  planType: string;
  monthly: boolean;
  addOns?: AddOnsArray[];
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setPlan: (plan: number) => void;
  setPlanType: (planType: string) => void;
  setMonthly: (isMonthly: boolean) => void;
  setAddOns: (addOns: AddOnsArray[]) => void;
}

export const MyGlobalContext = createContext<GlobalContent>({
  name: "",
  email: "",
  phoneNumber: "",
  plan: 0,
  planType: "Arcade",
  monthly: true,
  addOns: [{ addOnsType: "", isSelected: false, price: 0 }],
  setName: (_name: string) => {},
  setEmail: (_email: string) => {},
  setPhoneNumber: (_phoneNumber: string) => {},
  setPlan: (_plan: number) => {},
  setPlanType: (_planType: string) => {},
  setMonthly: (_monthly: boolean) => {},
  setAddOns: (_addOns: AddOnsArray[]) => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
