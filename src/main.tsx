import { useEffect } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { fadeIn } from "./js/fadeIn";
import { HashRouter, HashRouter as Router } from "react-router-dom";

// Ensure createRoot is only called once
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Need to understand how
const Main: React.FC = () => {
  useEffect(() => {
    fadeIn(); // Call fadeIn on initial load
  }, []); // Runs once on mount
  return (
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
};

// Render the app
const root = createRoot(rootElement);
root.render(<Main />);
