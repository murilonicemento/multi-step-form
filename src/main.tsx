import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Plan } from "./pages/Plan";
import { NotFound } from "./pages/NotFound";
import { GlobalStyles } from "./style/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/addOns" element={<Plan />} />
        <Route path="/finish" element={<Plan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
