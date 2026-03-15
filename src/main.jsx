import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { SmoothScroll } from "./components/ui/scrolling/SmoothScroll";

createRoot(document.getElementById("root")).render(
  <SmoothScroll>
    <App />
  </SmoothScroll>,
);
