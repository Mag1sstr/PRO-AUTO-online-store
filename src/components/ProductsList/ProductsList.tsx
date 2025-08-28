import { useState } from "react";
import styles from "./ProductsList.module.scss";
import { useLang } from "../../hooks/useLang";
import { useAppDispatch } from "../../store/store";
import { setAvailable, setCurrentPage } from "../../store/slices/filtersSlice";
import ProductCard from "../ProductCard/ProductCard";
import { useGetProductsQuery } from "../../api/api";
import { useFilters } from "../../hooks/useFilters";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

function ProductsList() {
  const [sortPrice, setSortPrice] = useState<boolean | null>(null);
  const [sortAvailable, setSortAvailable] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

  const dispatch = useAppDispatch();
  const { t, lang } = useLang();
  const { currentPage, available, brandId, modelId, genId } = useFilters();

  const { data, isLoading } = useGetProductsQuery({
    page: currentPage,
    size: 6,
    brandId,
    modelId,
    generationId: genId,
    available,
  });

  const sortedProducts =
    data &&
    [...data.items].sort((a, b) =>
      sortPrice ? a.price - b.price : b.price - a.price
    );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={styles.header__filters}>
        {t[lang].catalog.header_filters.sort}
        <p
          onClick={() => {
            setSortPrice((prev) => !prev);
          }}
          className={sortPrice ? styles.active : ""}
        >
          {t[lang].catalog.header_filters.price}
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

            dispatch(setAvailable(!sortAvailable ? 1 : 0));
          }}
          className={sortAvailable ? styles.active : ""}
        >
          {t[lang].catalog.header_filters.available}
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
        <div className={styles.view}>
          <p>{t[lang].catalog.header_filters.view}:</p>
          <button
            onClick={() => setView("grid")}
            className={view === "grid" ? styles.active : ""}
          >
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="6" height="6" fill="#1D1D1D" />
              <rect y="10" width="6" height="6" fill="#1D1D1D" />
              <rect y="20" width="6" height="6" fill="#1D1D1D" />
              <rect x="9" width="6" height="6" fill="#1D1D1D" />
              <rect x="9" y="10" width="6" height="6" fill="#1D1D1D" />
              <rect x="9" y="20" width="6" height="6" fill="#1D1D1D" />
              <rect x="18" width="6" height="6" fill="#1D1D1D" />
              <rect x="18" y="10" width="6" height="6" fill="#1D1D1D" />
              <rect x="18" y="20" width="6" height="6" fill="#1D1D1D" />
            </svg>
          </button>
          <button
            onClick={() => setView("list")}
            className={view === "list" ? styles.active : ""}
          >
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="6" fill="white" />
              <rect y="10" width="24" height="6" fill="white" />
              <rect y="20" width="24" height="6" fill="white" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${styles.products} ${
          view === "list" && styles.product__list
        }`}
      >
        {(sortPrice === null ? data?.items : sortedProducts)?.map((el) => (
          <ProductCard key={el.id} {...el} view={view} />
        ))}
      </div>

      <Pagination
        totalPages={data?.totalPages}
        currentPage={currentPage}
        setCurrentPage={(page) => dispatch(setCurrentPage(page))}
      />
    </>
  );
}

export default ProductsList;
