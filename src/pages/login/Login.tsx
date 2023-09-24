import { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../shared/store/auth-reducer";
import { CustomInput, CustomButton } from "../../shared/components/";
import axios, { AxiosError } from "axios";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Login.module.sass";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [erro, setErro] = useState<string>("");
  const [voucher, setVoucher] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleVoucherChange: ChangeEventHandler<HTMLInputElement> = event => {
    setVoucher(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    setLoading(true);
    setErro("");

    if (voucher.length !== 6) {
      setErro("Voucher inválido.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://www.lifeeng.com.br/igt/api/api.php?option=login&voucher=${voucher}`
      );

      if (!response.data.aceito) throw new Error(response.data.message);

      dispatch(setUser({ ...response.data }));
    } catch (e) {
      const error = e as AxiosError;

      const errorMessage = error.message || "Ocorreu um erro durante o login.";
      setErro(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <figure className={styles.logo}>
        <img src="/assets/logo.svg" alt="Logo IGT" />
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
            <CustomButton type="submit">
              {loading ? <span className={styles.loader} /> : "ENTRAR"}
            </CustomButton>
            <p className={styles.erro}>{erro}</p>
          </div>
        </form>
        <a
          className={styles.instagram}
          href="https://www.instagram.com/igt_ifesgottalents/"
          target="_blank"
          rel="noopener"
        >
          <AiFillInstagram
            className={styles.instagram}
            size={100}
            title="Instagram"
          />
        </a>
      </div>
      <p className={styles.cr}>IGT © 2023 Todos os Direitos Reservados</p>
    </div>
  );
};
