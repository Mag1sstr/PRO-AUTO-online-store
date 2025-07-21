import styles from "./Counter.module.scss";

interface IProps {
  count: number;
  setCount: (fn: (prev: number) => number) => void;
}

function Counter({ count, setCount }: IProps) {
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className={styles.counter}>
      <div className={styles.counter__btn} onClick={decreaseCount}>
        -
      </div>
      <p>{count < 10 ? `0${count}` : count}</p>
      <div className={styles.counter__btn} onClick={increaseCount}>
        +
      </div>
    </div>
  );
}

export default Counter;
