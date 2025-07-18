import styles from "./Products.module.scss";
import { useGetProductsQuery } from "../../api/api";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import Filters from "../Filters/Filters";
import { useFilters } from "../../hooks/useFilters";
import { useAppDispatch } from "../../store/store";
import { setAvailable } from "../../store/slices/filtersSlice";
function Products() {
  const dispatch = useAppDispatch();
  const [sortPrice, setSortPrice] = useState(false);
  const [sortAvailable, setSortAvailable] = useState(false);

  const { currentPage, available } = useFilters();

  const { data, isLoading } = useGetProductsQuery({
    page: currentPage,
    size: 6,
    available,
  });

  console.log(available);

  return (
    <section className={styles.wrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2 className={styles.title}>FrostAuto - каталог компрессоров</h2>
          <div className={styles.row}>
            <Filters />
            <div className={styles.col}>
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
