import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { UserContentProvider } from "./context/UserContext";
import { ActivityContextProvider } from "./context/ActivitiyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContentProvider>
      <ActivityContextProvider>
        <App />
      </ActivityContextProvider>
    </UserContentProvider>
  </React.StrictMode>,
);
