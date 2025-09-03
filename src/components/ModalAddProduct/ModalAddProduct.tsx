import { useEffect, type FormEvent } from "react";
import { useAddToCartMutation } from "../../api/api";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import styles from "./ModalAddProduct.module.scss";
import { TiShoppingCart } from "react-icons/ti";
import { toast } from "react-toastify";
import { useLang } from "../../hooks/useLang";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Button from "../Button/Button";
import { setProductCount } from "../../store/slices/selectProductSlice";
import { useAuth } from "../../hooks/useAuth";

function ModalAddProduct() {
  const dispatch = useAppDispatch();
  const { productId, productCount } = useAppSelector(
    (state) => state.selectProduct
  );

  const [addToCart, { isSuccess: isAddToCartSuccesss }] =
    useAddToCartMutation();

  const { openAddProduct, setOpenAddProduct } = useModals();
  const { t, lang } = useLang();
  const { user } = useAuth();

  const increaseCount = () => {
    dispatch(setProductCount(productCount + 1));
  };
  const decreaseCount = () => {
    if (productCount > 1) {
      dispatch(setProductCount(productCount - 1));
    }
  };

  console.log(productId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      addToCart({
        count: productCount,
        productId: productId!.id,
      });
    } else {
      toast.error("Войдите в аккаунт!");
    }
  };

  useEffect(() => {
    if (isAddToCartSuccesss) {
      toast.success(t[lang].toast.add_cart);
      setOpenAddProduct(false);
    }
  }, [isAddToCartSuccesss]);

  return (
    <ModalWrapper open={openAddProduct} setOpen={setOpenAddProduct}>
      <ModalTop
        icon={<TiShoppingCart size={60} />}
        setOpen={setOpenAddProduct}
        title="Добавить в корзину"
        text="Добавьте товар в корзину"
      />

      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
          <p className={styles.title}>{productId?.name}</p>
          <div className={styles.count}>
            Количество:{" "}
            <div className={styles.counter}>
              <button type="button" onClick={decreaseCount}>
                -
              </button>
              <p>{productCount}</p>
              <button type="button" onClick={increaseCount}>
                +
              </button>
            </div>
          </div>

          <div className={styles.buttons}>
            <p
              onClick={() => {
                setOpenAddProduct(false);
              }}
            >
              Продолжить покупки
            </p>
            <Button type="submit" red fontSize={12}>
              Добавить
            </Button>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalAddProduct;
