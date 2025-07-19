import styles from "./Pagination.module.scss";

interface IProps {
  currentPage: number;
  totalPages: number | undefined;
  setCurrentPage: (page: number) => void;
}

function Pagination({ currentPage, setCurrentPage, totalPages }: IProps) {
  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    totalPages && (
      <section className={styles.wrapper}>
        <ul className={styles.row}>
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <li
                key={page}
                className={`${styles.page} ${
                  currentPage === page && styles.active
                }`}
                onClick={() => handleClickPage(page)}
              >
                {page}
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
}

export default Pagination;
