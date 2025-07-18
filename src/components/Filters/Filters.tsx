import FilterSelect from "../FilterSelect/FilterSelect";
import styles from "./Filters.module.scss";

function Filters() {
  return (
    <div className={styles.sidebar}>
      <FilterSelect title={"rerer"} />
      <FilterSelect title={"rerer"} />
    </div>
  );
}

export default Filters;
