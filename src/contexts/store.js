import { createContext, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "",
  isMonthly: true,
  addOns: [],
};

export const AppContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return <AppContext.Provider value={{
    name: state.name,
    email: state.email,
    phoneNumber: state.phoneNumber,
    plan: state.plan,
    isMonthly: state.isMonthly,
    addOns: state.addOns,
    setName: (name) => updateState("name", name),
    setEmail: (email) => updateState("email", email),
    setPhoneNumber: (phoneNumber) => updateState("phoneNumber", phoneNumber),
    setPlan: (plan) => updateState("plan", plan),
    setIsMonthly: (isMonthly) => updateState("isMonthly", isMonthly),
    setAddOns: (addOns) => updateState("addOns", addOns),
  }}>{children}</AppContext.Provider>;
};


export default Provider;