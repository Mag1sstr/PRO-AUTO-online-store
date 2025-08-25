import { useEffect } from "react";
import { useLang } from "../../hooks/useLang";
import FilterSelect from "../FilterSelect/FilterSelect";
import styles from "./Filters.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  brandChange,
  genChange,
  getBrands,
  modelChange,
  setAvailable,
} from "../../store/slices/filtersSlice";
import { useFilters } from "../../hooks/useFilters";
import ParamsSelect from "../ParamsSelect/ParamsSelect";
import Checkbox from "../Checkbox/Checkbox";

function Filters() {
  const dispatch = useAppDispatch();
  const { t, lang } = useLang();
  const { brands, models, gens } = useFilters();
  const available = useAppSelector((state) => state.filters.available);

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
        <ParamsSelect title="ЦЕНА">
          <div className={styles.range}>
            <div className={styles.range__row}>
              <input type="number" placeholder="от" />
              <input type="number" placeholder="до" />
            </div>
          </div>
        </ParamsSelect>
        <ParamsSelect title="СТАТУС">
          <div className={styles.status__col}>
            <div className={styles.status__item}>
              <Checkbox
                onClick={() => dispatch(setAvailable(available === 0 ? 1 : 0))}
              />{" "}
              в наличии
            </div>
          </div>
        </ParamsSelect>
        <div className={styles.params__footer}>
          Подберём аккумулятор и масло конкретно на ваш автомобиль. Цель нашего
          магазина - предложение широкого ассортимента товаров.
        </div>
      </div>
    </div>
  );
}

export default Filters;
