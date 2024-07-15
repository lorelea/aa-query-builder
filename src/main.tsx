import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { mockServiceWorker } from "./msw-setup/mock-service-worker";
import "./global.css";

// Setup mock api
mockServiceWorker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
