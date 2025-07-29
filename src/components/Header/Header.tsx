import styles from "./Header.module.scss";
import logoImg from "../../assets/header/logo.svg";
import mobileLogo from "../../assets/header/mobile-logo.svg";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import { useModals } from "../../hooks/useModals";
import ModalLogin from "../ModalLogin/ModalLogin";
import { Link, useNavigate } from "react-router-dom";
import ButtonBurger from "../ButtonBurger/ButtonBurger";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import { useLang } from "../../hooks/useLang";
import ModalRegister from "../ModalRegister/ModalRegister";
import { useAuth } from "../../hooks/useAuth";
import { FaUserAlt } from "react-icons/fa";
import { ROUTES } from "../../routes/routes";
import { useEffect, useRef } from "react";
import { FaUserLarge } from "react-icons/fa6";
import CartDrop from "../CartDrop/CartDrop";
import { useGetCartQuery } from "../../api/api";
import { toast } from "react-toastify";
import Search from "../Search/Search";

interface IProps {
  slider?: boolean;
}

function Header({ slider = true }: IProps) {
  const windowWidth = useWindowWidth();
  const { setOpenLoginModal, setOpenCart, openCart } = useModals();
  const { t, lang } = useLang();
  const { user } = useAuth();

  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement | null>(null);

  const { count } = useGetCartQuery(null, {
    refetchOnMountOrArgChange: true,
    selectFromResult: ({ data }) => ({
      count: data?.items.length,
    }),
  });

  useEffect(() => {
    ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    if (count === 0) {
      setOpenCart(false);
    }
  }, [count]);

  return (
    <header
      ref={ref}
      className={`${styles.header} ${slider && styles.banner__height}`}
    >
      <ModalLogin />
      <ModalRegister />
      <Search />

      {slider && <Slider />}
      <div className={styles.header__top}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.logo__row}>
              <Link to="/">
                <img
                  className={styles.logo}
                  src={windowWidth > 400 ? logoImg : mobileLogo}
                  alt="logo"
                />
              </Link>
              {windowWidth <= 1040 && <ButtonBurger />}
              {windowWidth > 400 && <SwitchLanguage />}
            </div>
            {windowWidth > 1040 && (
              <ul className={styles.links}>
                <li
                  className={styles.link}
                  onClick={() => navigate(ROUTES.COMPANY)}
                >
                  {t[lang].header.company}
                </li>

                <li
                  className={styles.link}
                  onClick={() => navigate(ROUTES.CATALOG)}
                >
                  {t[lang].header.catalog}
                </li>

                <li className={styles.link}>{t[lang].header.services}</li>
                <li className={styles.link}>{t[lang].header.info}</li>
                <li className={styles.link}>{t[lang].header.contacts}</li>
              </ul>
            )}

            <div className={styles.icons}>
              {windowWidth > 1040 && (
                <>
                  {user ? (
                    <Button
                      borderColor="gray"
                      onClick={() => navigate(ROUTES.PROFILE)}
                    >
                      <FaUserAlt /> {user.firstName + " " + user.lastName}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setOpenLoginModal(true)}
                      width={168}
                      height={40}
                      fontSize={12}
                    >
                      {t[lang].header.login}
                    </Button>
                  )}
                </>
              )}
              {windowWidth <= 1040 && (
                <FaUserLarge
                  onClick={() => {
                    if (!user) {
                      setOpenLoginModal(true);
                    }
                  }}
                  className={styles.user}
                  size={28}
                />
              )}
              <div className={styles.search}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  if (count === 0) {
                    setOpenCart(false);
                    toast.error("Корзина пуста");
                  } else {
                    setOpenCart((prev) => !prev);
                  }
                }}
                className={`${styles.cart} ${openCart && styles.cart__active}`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3594 11L29.9844 23H14V11H33.3594Z"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path d="M14 4L14 24.5" stroke="white" strokeWidth="4" />
                  <path d="M14 6H4" stroke="white" strokeWidth="4" />
                  <circle
                    cx="17"
                    cy="31"
                    r="3"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <circle
                    cx="28"
                    cy="31"
                    r="3"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>
                <CartDrop />
                {count! > 0 && <div className={styles.counter}>{count}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
