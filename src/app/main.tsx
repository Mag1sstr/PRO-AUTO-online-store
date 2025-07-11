import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "aos/dist/aos.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ModalsContextProvider from "../contexts/ModalsContextProvider.tsx";
import LangContextProvider from "../contexts/LangContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ModalsContextProvider>
    <LangContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LangContextProvider>
  </ModalsContextProvider>
);
