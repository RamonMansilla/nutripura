import React from "react";
import ReactDOM from "react-dom/client";
import { App, DemoPage } from "./App.jsx";
import "./styles.css";
import PureStorefront from "./PureStorefront.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {window.location.pathname === "/prueba" ? <DemoPage /> : window.location.pathname === "/admin" ? <App /> : <PureStorefront />}
  </React.StrictMode>,
);

