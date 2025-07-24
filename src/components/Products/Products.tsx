import styles from "./Products.module.scss";
import { useGetProductsQuery } from "../../api/api";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import Filters from "../Filters/Filters";
import { useFilters } from "../../hooks/useFilters";
import { useAppDispatch } from "../../store/store";
import { setAvailable, setCurrentPage } from "../../store/slices/filtersSlice";
import Pagination from "../Pagination/Pagination";
import { useLang } from "../../hooks/useLang";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import ModalAddProduct from "../ModalAddProduct/ModalAddProduct";
function Products() {
  const dispatch = useAppDispatch();
  const [sortPrice, setSortPrice] = useState(false);
  const [sortAvailable, setSortAvailable] = useState(false);

  const { currentPage, available, brandId, modelId, genId } = useFilters();

  const { data, isLoading } = useGetProductsQuery({
    page: currentPage,
    size: 6,
    brandId,
    modelId,
    generationId: genId,
    available,
  });

  const { t, lang } = useLang();

  const location = useLocation();

  return (
    <section className={styles.wrapper}>
      <ModalAddProduct />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2 className={styles.title}>FrostAuto - каталог компрессоров</h2>
          <div className={styles.row}>
            <Filters />
            <div className={styles.col}>
              <Outlet />
              {location.pathname === ROUTES.CATALOG && (
                <>
                  <div className={styles.header__filters}>
                    сортировать
                    <p
                      onClick={() => {
                        setSortPrice((prev) => !prev);
                      }}
                      className={sortPrice ? styles.active : ""}
                    >
                      ПО ЦЕНЕ
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M4 12L10 8L16 12"
                          stroke="#1D1D1D"
                          strokeWidth="4"
                        />
                      </svg>
                    </p>
                    <p
                      onClick={() => {
                        setSortAvailable((prev) => !prev);
                        !sortAvailable
                          ? dispatch(setAvailable(1))
                          : dispatch(setAvailable(0));
                      }}
                      className={sortAvailable ? styles.active : ""}
                    >
                      ПО НАЛИЧИЮ
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M4 12L10 8L16 12"
                          stroke="#1D1D1D"
                          strokeWidth="4"
                        />
                      </svg>
                    </p>
                  </div>

                  <div className={styles.products}>
                    {data?.items.map((el) => (
                      <ProductCard key={el.id} {...el} />
                    ))}
                  </div>
                  <Pagination
                    totalPages={data?.totalPages}
                    currentPage={currentPage}
                    setCurrentPage={(page) => dispatch(setCurrentPage(page))}
                  />
                </>
              )}

              <div className={styles.products__footer}>
                <p>{t[lang].catalog.footer.text1}</p>
                <h3>{t[lang].catalog.footer.title}</h3>
                <div className={styles.footer__row}>
                  <p className={styles.footer__item}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.3186 10.0679C34.5772 9.6973 35.938 10.0619 36.8427 11.0122L44.1138 18.6494C44.9547 19.5328 45.275 20.7905 44.9593 21.9687L36.7686 52.5368C36.2683 54.404 34.3491 55.512 32.482 55.0117L15.0953 50.353C13.2282 49.8527 12.1202 47.9335 12.6205 46.0663L20.8112 15.4982C21.1268 14.3201 22.033 13.391 23.203 13.0464L33.3186 10.0679Z"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <circle
                        opacity="0.5"
                        cx="32.4589"
                        cy="20.3238"
                        r="3.5"
                        transform="rotate(15 32.4589 20.3238)"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <path
                        d="M32.459 20.3237L36.6001 4.8689"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                    </svg>
                    {t[lang].catalog.footer.card1_text}
                  </p>
                  <p className={styles.footer__item}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.5"
                        cx="27.875"
                        cy="29.875"
                        r="16.5"
                        stroke="black"
                        strokeWidth="3"
                      />
                      <path
                        d="M52 30C52 16.7452 41.2548 6 28 6C14.7452 6 4 16.7452 4 30C4 43.2548 14.7452 54 28 54"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <path
                        d="M55.8758 26.7037L52.1125 29.9957L47.8984 27.3047"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <path d="M28 19V31H36" stroke="#1D1D1D" strokeWidth="3" />
                    </svg>

                    {t[lang].catalog.footer.card2_text}
                  </p>
                  <p className={styles.footer__item}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8.5"
                        y="26.5"
                        width="43"
                        height="14"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <rect
                        x="10.5"
                        y="46.5"
                        width="5"
                        height="5"
                        transform="rotate(-90 10.5 46.5)"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <rect
                        x="44.5"
                        y="46.5"
                        width="5"
                        height="5"
                        transform="rotate(-90 44.5 46.5)"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <path
                        d="M40.4072 13.5L48.3291 26.5H11.4609L18.1641 13.5H40.4072Z"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <path
                        opacity="0.5"
                        d="M20 32L40 32"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <path
                        opacity="0.5"
                        d="M22 36L38 36"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <circle
                        cx="15"
                        cy="34"
                        r="2"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <circle
                        cx="45"
                        cy="34"
                        r="2"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                    </svg>

                    {t[lang].catalog.footer.card3_text}
                  </p>
                  <p className={styles.footer__item}>
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.4062 22.873L34.7432 23.4707L35.417 23.6064L44.2129 25.3809L38.1396 31.9883L37.6758 32.4941L37.7539 33.1758L38.7842 42.0908L30.624 38.3564L30 38.0703L29.376 38.3564L21.2148 42.0908L22.2461 33.1758L22.3242 32.4941L21.8604 31.9883L15.7861 25.3809L24.583 23.6064L25.2568 23.4707L25.5938 22.873L30 15.0547L34.4062 22.873Z"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                      <circle
                        opacity="0.5"
                        cx="30"
                        cy="30"
                        r="22.5"
                        stroke="#1D1D1D"
                        strokeWidth="3"
                      />
                    </svg>

                    {t[lang].catalog.footer.card4_text}
                  </p>
                </div>
                <p>{t[lang].catalog.footer.text2}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
