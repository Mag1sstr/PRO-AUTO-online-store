import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NewsPageContent from "../../components/NewsPageContent/NewsPageContent";
import SectionFAQ from "../../components/SectionFAQ/SectionFAQ";

function NewsPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <NewsPageContent />
      <SectionFAQ />
      <Footer />
    </>
  );
}

export default NewsPage;
