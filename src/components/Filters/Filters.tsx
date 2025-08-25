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

      <div className={styles.params}>
        <div className={styles.params__title}>ПОДБОР ПАРАМЕТРОВ</div>
        <div className={styles.select}>
          <div className={styles.title}>
            ЦЕНА{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4L12 10L8 16" stroke="white" strokeWidth="4" />
            </svg>
          </div>
          <div className={styles.select__drop}>
            <div className={styles.content}>
              <div className={styles.range}>
                <div className={styles.range__row}>
                  <input type="number" placeholder="от" />
                  <input type="number" placeholder="до" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.slider__wrapper}>
          <input className={styles.min} type="range" min="0" max="200000" />
          <input
            className={styles.max}
            type="range"
            min="0"
            value="200000"
            max="200000"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Filters;
