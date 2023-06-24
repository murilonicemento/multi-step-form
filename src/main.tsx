import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Plan } from "./pages/Plan";
import { AddOns } from "./pages/AddOns";
import { Finish } from "./pages/Finish";
import { NotFound } from "./pages/NotFound";
import { Acknowledgment } from "./pages/Acknowledgment";
import { GlobalStyles } from "./style/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
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
  </React.StrictMode>
);
