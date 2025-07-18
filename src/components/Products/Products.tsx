import styles from "./Products.module.scss";
import { useEffect, useRef } from "react";
import { useGetProductsQuery } from "../../api/api";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
function Products() {
  const { data, isLoading } = useGetProductsQuery({ page: 1, size: 6 });

  // const ref = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }, [location]);

  console.log(data);

  return (
    <section className={styles.wrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2 className={styles.title}>FrostAuto - каталог компрессоров</h2>
          <div className={styles.row}>
            <div className={styles.sidebar}>
              <div className={styles.select}>
                <p>АВТОХИМИЯ</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 4L12 10L8 16" stroke="white" strokeWidth="4" />
                </svg>
                <div className={styles.select__drop}>
                  <div className={styles.select__item}>
                    <p>MAGNUM 60Ah</p>
                  </div>
                  <div className={styles.select__item}>
                    <p>MAGNUM 60Ah</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.products}>
              {data?.items.map((el) => (
                <ProductCard key={el.id} {...el} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
