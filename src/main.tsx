import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
