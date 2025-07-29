import { createContext } from "react";

type SetModalState = (open: boolean | ((prev: boolean) => boolean)) => void;

interface IModalsContext {
  openRegModal: boolean;
  setOpenRegModal: SetModalState;
  openLoginModal: boolean;
  setOpenLoginModal: SetModalState;
  openCart: boolean;
  setOpenCart: SetModalState;
  openAddProduct: boolean;
  setOpenAddProduct: SetModalState;
  openSearch: boolean;
  setOpenSearch: SetModalState;
}

export const ModalsContext = createContext({} as IModalsContext);
