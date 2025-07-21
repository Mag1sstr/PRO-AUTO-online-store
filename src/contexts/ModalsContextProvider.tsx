import { useState } from "react";
import { ModalsContext } from "./ModalsContext";

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openRegModal, setOpenRegModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const [openCart, setOpenCart] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        openRegModal,
        setOpenRegModal,
        openLoginModal,
        setOpenLoginModal,
        openCart,
        setOpenCart,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
