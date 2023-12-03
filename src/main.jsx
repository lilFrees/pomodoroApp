// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemesProvider from "./Themes/Themes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemesProvider>
    <App />
  </ThemesProvider>
);
