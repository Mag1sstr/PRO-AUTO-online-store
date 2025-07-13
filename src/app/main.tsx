import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "aos/dist/aos.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ModalsContextProvider from "../contexts/ModalsContextProvider.tsx";
import LangContextProvider from "../contexts/LangContextProvider.tsx";
import { Provider } from "react-redux";
import { store } from "../store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ModalsContextProvider>
      <LangContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LangContextProvider>
    </ModalsContextProvider>
  </Provider>
);
