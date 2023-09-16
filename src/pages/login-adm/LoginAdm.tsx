import { ChangeEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../shared/store/auth-reducer";
import { CustomInput, CustomButton } from "../../shared/components/";
import styles from "./LoginAdm.module.sass";

interface IError {
  formError: string | null;
  voucherHasError: boolean;
  passHasError: boolean;
}

export const LoginAdm: React.FC = () => {
  const dispatch = useDispatch();
  const [{ formError, passHasError, voucherHasError }, setError] =
    useState<IError>({} as IError);
  const [voucher, setVoucher] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleVoucherChange: ChangeEventHandler<HTMLInputElement> = event => {
    setVoucher(event.target.value);
    setError(oldError => ({ ...oldError, voucherHasError: false }));
  };

  const handlePassChange: ChangeEventHandler<HTMLInputElement> = event => {
    setPass(event.target.value);
    setError(oldError => ({ ...oldError, passHasError: false }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    setError({} as IError);

    if (voucher.length !== 8) {
      setError(oldError => ({
        ...oldError,
        formError: "Voucher deve ter 8 caracteres.",
        voucherHasError: true,
      }));

      return;
    }

    if (pass.length <= 0 || pass !== "senha") {
      setError(oldError => ({
        ...oldError,
        formError: "Senha inválida.",
        voucherHasError: true,
      }));

      return;
    }

    dispatch(setUser({ voucher, adm: true }));
  };

  return (
    <div className={styles.main}>
      <div className={styles.entrar}>
        <h1 className={styles.titulo}>ADM</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.controls}>
            <CustomInput
              type="text"
              label="Voucher"
              hasError={voucherHasError}
              onChange={handleVoucherChange}
              value={voucher}
            />
            <CustomInput
              type="password"
              label="Senha"
              hasError={passHasError}
              onChange={handlePassChange}
              value={pass}
            />
            <CustomButton type="submit">ENTRAR</CustomButton>
            <p className={styles.erro}>{formError}</p>
          </div>
        </form>
      </div>
      <p className={styles.cr}>IGT © 2023 Todos os Direitos Reservados</p>
    </div>
  );
};
