import AboutCompany from "../../components/AboutCompany/AboutCompany";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import License from "../../components/License/License";
import Partners from "../../components/Partners/Partners";
import SectionReviews from "../../components/SectionReviews/SectionReviews";
import { useMetadata } from "../../hooks/useMetadata";

function AboutCompanyPage() {
  useMetadata({ title: "О компании" });
  return (
    <>
      <Header />
      <Breadcrumbs />
      <AboutCompany />
      <License />
      <Partners />
      <SectionReviews />
      <Footer />
    </>
  );
}

export default AboutCompanyPage;
