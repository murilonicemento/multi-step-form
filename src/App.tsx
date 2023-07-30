import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyGlobalContext, AddOnsArray } from "./hooks/useGlobalContext";
import { Home } from "./pages/Home";
import { Plan } from "./pages/Plan";
import { AddOns } from "./pages/AddOns";
import { Finish } from "./pages/Finish";
import { NotFound } from "./pages/NotFound";
import { Acknowledgment } from "./pages/Acknowledgment";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [plan, setPlan] = useState(0);
  const [planType, setPlanType] = useState("");
  const [monthly, setMonthly] = useState(true);
  const [addOns, setAddOns] = useState<AddOnsArray[]>([]);

  return (
    <MyGlobalContext.Provider
      value={{
        name,
        email,
        phoneNumber,
        plan,
        planType,
        monthly,
        addOns,
        setName,
        setEmail,
        setPhoneNumber,
        setPlan,
        setPlanType,
        setMonthly,
        setAddOns,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/addOns" element={<AddOns />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/acknowledgment" element={<Acknowledgment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyGlobalContext.Provider>
  );
}
export default App;
