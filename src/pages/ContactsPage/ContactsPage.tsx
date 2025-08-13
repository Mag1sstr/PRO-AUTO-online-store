import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ContactsPageContent from "../../components/ContactsPageContent/ContactsPageContent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionAsk from "../../components/SectionAsk/SectionAsk";

function ContactsPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ContactsPageContent />
      <SectionAsk />
      <Footer />
    </>
  );
}

export default ContactsPage;
