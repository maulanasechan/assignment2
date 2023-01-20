import { PublicClientApplication } from "@azure/msal-browser";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App msalInstance={msalInstance} />
  </React.StrictMode>
);
