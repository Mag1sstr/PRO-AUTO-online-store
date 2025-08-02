import { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CreatingOrder from "../../components/CreatingOrder/CreatingOrder";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

function CartPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.HOME);
    }
  }, [user]);
  return (
    <>
      <Header />
      <Breadcrumbs />
      <CreatingOrder />
      <Footer />
    </>
  );
}

export default CartPage;
