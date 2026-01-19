import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//Without JSX
// const myElement = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Hello, world!"
// );
// const root = createRoot(document.getElementById("root"));
// root.render(myElement);
