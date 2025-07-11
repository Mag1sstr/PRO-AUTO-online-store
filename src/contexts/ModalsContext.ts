import { createContext } from "react";

interface IModalsContext {
  openRegModal: boolean;
  setOpenRegModal: (open: boolean) => void;
  openLoginModal: boolean;
  setOpenLoginModal: (open: boolean) => void;
}

export const ModalsContext = createContext({} as IModalsContext);
