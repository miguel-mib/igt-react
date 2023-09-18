import { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../shared/store/auth-reducer";
import styles from "./Login.module.sass";
import { CustomInput, CustomButton } from "../../shared/components/";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [erro, setErro] = useState<string>("");
  const [voucher, setVoucher] = useState<string>("");

  const handleVoucherChange: ChangeEventHandler<HTMLInputElement> = event => {
    setVoucher(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    setErro("");

    if (voucher.length !== 8) {
      setErro("Voucher inválido.");
      return;
    }

    dispatch(setUser({ voucher, adm: false, votou: false }));
  };

  return (
    <div className={styles.main}>
      <figure className={styles.logo}>
        <img src="/assets/logo.svg" alt="IGT_Logo" />
      </figure>
      <div className={styles.entrar}>
        <h1 className={styles.titulo}>Entrar</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.controls}>
            <CustomInput
              type="text"
              label="Voucher"
              hasError={!!erro}
              onChange={handleVoucherChange}
              value={voucher}
            />
            <CustomButton type="submit">ENTRAR</CustomButton>
            <p className={styles.erro}>{erro}</p>
          </div>
        </form>
        <a
          className={styles.instagram}
          href="https://www.instagram.com/ifes.gottalent/"
          target="_blank"
          rel="noopener"
        >
          <img src="/assets/instagram-colored.svg" alt="INSTAGRAM_Logo" />
        </a>
      </div>
      <p className={styles.cr}>IGT © 2023 Todos os Direitos Reservados</p>
    </div>
  );
};
