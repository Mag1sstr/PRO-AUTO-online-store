import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import { useMetadata } from "../../hooks/useMetadata";

function CatalogPage() {
  useMetadata({ title: "Каталог" });

  return (
    <>
      <Header />
      <Breadcrumbs />
      <Products />
      <Footer />
    </>
  );
}

export default CatalogPage;
