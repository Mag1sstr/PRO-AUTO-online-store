import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "aos/dist/aos.css";

import App from "./App.tsx";
import ModalsContextProvider from "../contexts/ModalsContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <ModalsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalsContextProvider>
);
