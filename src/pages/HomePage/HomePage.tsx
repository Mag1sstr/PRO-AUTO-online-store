import Advantages from "../../components/Advantages/Advantages";
import AutoInfo from "../../components/AutoProductsInfo/AutoInfo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
// import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <>
      <Header />
      <Advantages />
      <AutoInfo />
      <Services />
      <Footer />
    </>
  );
}

export default HomePage;
