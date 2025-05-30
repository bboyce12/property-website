import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { fadeIn } from "./js/fadeIn";
// Ensure createRoot is only called once
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found");
}
// Need to understand how
const Main = () => {
    useEffect(() => {
        fadeIn(); // Call fadeIn on initial load
    }, []); // Runs once on mount
};
// Render the app
const root = createRoot(rootElement);
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
