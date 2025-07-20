import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import notfoundImg from "../../assets/banners/not-found.jpg";
import { useLang } from "../../hooks/useLang";
import Footer from "../../components/Footer/Footer";

function NotFound() {
  const { t, lang } = useLang();
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header slider={false} />
        <Banner
          image={notfoundImg}
          title={t[lang].banners.not_found}
          active={true}
          notFound
        />
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
