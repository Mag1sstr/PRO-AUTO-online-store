import Advantages from "../../components/Advantages/Advantages";
import AutoInfo from "../../components/AutoProductsInfo/AutoInfo";
import Company from "../../components/Company/Company";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";
// import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <>
      <Header />
      <Advantages />
      <AutoInfo />
      <Services />
      <Company />
      <News />
      <Footer />
    </>
  );
}

export default HomePage;
