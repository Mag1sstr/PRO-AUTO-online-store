import { useEffect } from "react";
import AppRouter from "../routes/AppRouter";
import AOS from "aos";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <AppRouter />
      <ScrollToTopButton />
    </>
  );
}

export default App;
