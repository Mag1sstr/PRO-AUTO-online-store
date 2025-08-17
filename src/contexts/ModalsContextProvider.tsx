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
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [openAskModal, setOpenAskModal] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        openRegModal,
        setOpenRegModal,
        openLoginModal,
        setOpenLoginModal,
        openCart,
        setOpenCart,
        openAddProduct,
        setOpenAddProduct,
        openSearch,
        setOpenSearch,
        openMobileNav,
        setOpenMobileNav,
        openAskModal,
        setOpenAskModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
