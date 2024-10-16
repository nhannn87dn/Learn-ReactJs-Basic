import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// const myElement = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Hello, world!"
// );
// const root = createRoot(document.getElementById("root")!);
// root.render(myElement);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
