import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import { ROUTES } from "./routes";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import AboutCompanyPage from "../pages/AboutCompanyPage/AboutCompanyPage";
import CartPage from "../pages/CartPage/CartPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.COMPANY} element={<AboutCompanyPage />} />
      <Route path={ROUTES.CART} element={<CartPage />} />

      <Route path={ROUTES.CATALOG} element={<CatalogPage />}>
        <Route path=":id" element={<SingleProduct />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
