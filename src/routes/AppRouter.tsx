import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import { ROUTES } from "./routes";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import AboutCompanyPage from "../pages/AboutCompanyPage/AboutCompanyPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";

function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.COMPANY} element={<AboutCompanyPage />} />
      <Route path={ROUTES.CART} element={<CartPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
      <Route path={ROUTES.INFO} element={<NewsPage />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />

      <Route path={ROUTES.CATALOG} element={<CatalogPage />}>
        <Route path=":id" element={<SingleProduct />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
