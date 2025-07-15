import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import { ROUTES } from "./routes";
import CatalogPage from "../pages/CatalogPage/CatalogPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
