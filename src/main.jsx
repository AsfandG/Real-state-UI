import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AuthContextProvider } from "./context/authContext.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <Toaster />
    </AuthContextProvider>
  </React.StrictMode>
);
