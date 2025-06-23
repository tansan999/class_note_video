
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext.Provider value={{ user: { uid: "demo-user" } }}>
      <ThemeContext.Provider value={{ theme: "light" }}>
        <App />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  </React.StrictMode>
);
