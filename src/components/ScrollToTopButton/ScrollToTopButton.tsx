import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.scss";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 1200);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.btn} ${visible && styles.visible}`}
      onClick={scrollToTop}
    >
      <svg
        width="32"
        height="17"
        viewBox="0 0 32 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 15L16 3L30 15" stroke="#C53720" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default ScrollToTopButton;
