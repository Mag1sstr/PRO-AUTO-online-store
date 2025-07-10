import { createContext, useState } from "react";

interface IModalsContext {
  openRegModal: boolean;
  setOpenRegModal: (open: boolean) => void;
}

export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openRegModal, setOpenRegModal] = useState(false);

  return (
    <ModalsContext.Provider value={{ openRegModal, setOpenRegModal }}>
      {children}
    </ModalsContext.Provider>
  );
}
