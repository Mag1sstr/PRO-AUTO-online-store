import { useEffect } from "react";
import AppRouter from "../routes/AppRouter";
import AOS from "aos";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import { useGetUserMutation } from "../api/api";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../store/store";
import { setUser } from "../store/slices/authSlice";

function App() {
  const dispatch = useAppDispatch();
  const { token } = useAuth();
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    if (token) {
      getUser(null).then((resp) => {
        dispatch(setUser(resp.data));
      });
    }
  }, [token]);

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
