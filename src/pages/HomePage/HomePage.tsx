import Advantages from "../../components/Advantages/Advantages";
import AutoInfo from "../../components/AutoProductsInfo/AutoInfo";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <>
      <Header />
      <Advantages />
      <AutoInfo />
      <Footer />
    </>
  );
}

export default HomePage;
