import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import License from "../../components/License/License";
import Partners from "../../components/Partners/Partners";

function AboutCompanyPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <AboutCompany />
      <License />
      <Partners />
      <Footer />
    </>
  );
}

export default AboutCompanyPage;
