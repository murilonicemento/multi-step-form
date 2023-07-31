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
  setName: (name: string) => {},
  setEmail: (email: string) => {},
  setPhoneNumber: (phoneNumber: string) => {},
  setPlan: (plan: number) => {},
  setPlanType: (planType: string) => {},
  setMonthly: (monthly: boolean) => {},
  setAddOns: (addOns: AddOnsArray[]) => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
