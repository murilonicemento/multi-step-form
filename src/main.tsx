import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { GlobalStyles } from "./style/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
