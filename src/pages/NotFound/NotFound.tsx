import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import notfoundImg from "../../assets/banners/not-found.jpg";

function NotFound() {
  return (
    <>
      <Header slider={false} />
      <Banner
        image={notfoundImg}
        title="СТРАНИЦА НЕ НАЙДЕНА"
        active={true}
        notFound
      />
    </>
  );
}

export default NotFound;
