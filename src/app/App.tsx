import { useEffect } from "react";
import AppRouter from "../routes/AppRouter";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
