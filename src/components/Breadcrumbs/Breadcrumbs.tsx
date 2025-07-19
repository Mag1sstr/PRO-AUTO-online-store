import { useEffect, useRef } from "react";
import styles from "./Breadcrumbs.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { useLang } from "../../hooks/useLang";

function Breadcrumbs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, lang } = useLang();

  const pathnames = [
    "home",
    ...location.pathname.split("/").filter((el) => el),
  ] as (keyof (typeof t)[typeof lang]["paths"])[];

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

  return (
    <section ref={ref} className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          {pathnames.map((path, index) => {
            const isLastPath = index === pathnames.length - 1;

            return (
              <p
                onClick={() =>
                  navigate(path === "home" ? ROUTES.HOME : `/${path}`)
                }
                key={path}
                className={`${styles.item} ${isLastPath && styles.active}`}
              >
                {t[lang].paths[path]}
                {!isLastPath && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4L12 10L8 16"
                      stroke="#C53720"
                      strokeWidth="4"
                    />
                  </svg>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Breadcrumbs;
