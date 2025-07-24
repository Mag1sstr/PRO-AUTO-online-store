import { useEffect } from "react";
import { useLang } from "../../hooks/useLang";
import FilterSelect from "../FilterSelect/FilterSelect";
import styles from "./Filters.module.scss";
import { useAppDispatch } from "../../store/store";
import {
  brandChange,
  genChange,
  getBrands,
  modelChange,
} from "../../store/slices/filtersSlice";
import { useFilters } from "../../hooks/useFilters";

function Filters() {
  const dispatch = useAppDispatch();
  const { t, lang } = useLang();
  const { brands, models, gens } = useFilters();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  return (
    <div className={styles.sidebar}>
      <FilterSelect
        title={t[lang].filters.brand}
        data={brands}
        allBtnText={t[lang].filters.all_brands}
        onChange={(id) => {
          dispatch(brandChange(id));
        }}
      />
      <FilterSelect
        title={t[lang].filters.model}
        data={models}
        allBtnText={t[lang].filters.all_models}
        onChange={(id) => {
          dispatch(modelChange(id));
        }}
      />
      <FilterSelect
        title={t[lang].filters.gen}
        data={gens}
        allBtnText={t[lang].filters.all_gen}
        onChange={(id) => {
          dispatch(genChange(id));
        }}
      />

      {/* <div className={styles.params}>
        <div className={styles.params__title}>ПОДБОР ПАРАМЕТРОВ</div>
        <div className={styles.slider__wrapper}>
          <input className={styles.min} type="range" min="0" max="200000" />
          <input
            className={styles.max}
            type="range"
            min="0"
            value="200000"
            max="200000"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Filters;
