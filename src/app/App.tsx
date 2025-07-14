import { useEffect } from "react";
import AppRouter from "../routes/AppRouter";
import AOS from "aos";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <AppRouter />
      <ScrollToTopButton />
      <ToastContainer theme="dark" autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;
