import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OrderService from "../../components/OrderService/OrderService";

function ServicesPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <OrderService />
      <Footer />
    </>
  );
}

export default ServicesPage;
