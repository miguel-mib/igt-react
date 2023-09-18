import { Link } from "react-router-dom";
import styles from "./NotFound.module.sass";

export const NotFound: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Página não encontrada</h1>
        <Link className={styles.back} to={""}>
          Página inicial
        </Link>
      </div>
    </div>
  );
};
