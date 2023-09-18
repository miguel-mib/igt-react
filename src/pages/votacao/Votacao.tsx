import { useSelector } from "react-redux";
import { RootSelector } from "../../shared/store/selectors";
import { CustomButton } from "../../shared/components";
import { _PARTICIPANTES } from "./_PARTICIPANTES";
import { Participante } from "../../shared/components/participante/Participante";
import { useState, useEffect } from "react";
import { BeatLoader, MoonLoader } from "react-spinners";
import styles from "./Votacao.module.sass";
import { useDispatch } from "react-redux";
import { setVotou } from "../../shared/store/auth-reducer";
import { Navigate } from "react-router-dom";

export const Votacao: React.FC = () => {
  const [votacaoLoading, setVotacaoLoading] = useState<boolean>(true);
  const [enviarLoading, setEnviarLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  const voucher = useSelector(
    (state: RootSelector) => state.auth.user?.voucher
  );

  const votou = useSelector(
    (state: RootSelector) => state.auth.user?.votou
  );

  const participanteSelecionado = useSelector(
    (state: RootSelector) => state.participante
  );

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    setError(null);

    console.log(!participanteSelecionado);
    if (Object.keys(participanteSelecionado).length === 0) {
      setError("Você precisa selecionar um participante.");
      return;
    }

    setEnviarLoading(true);
    setTimeout(() => {
      setEnviarLoading(false);
      console.log(voucher, participanteSelecionado);

      dispatch(setVotou());
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setVotacaoLoading(false);
    }, 1000);
  }, []);

  if (votou) return <Navigate to={"/igt/entrar"}/>

  return (
    <div className={styles.main}>
      <h1 className={styles.titulo}>Votação</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        {votacaoLoading ? (
          <MoonLoader color="#c72f43" size={50} />
        ) : (
          <>
            <ul className={styles.participantesList}>
              {_PARTICIPANTES.map(participante => (
                <Participante
                  key={participante.id}
                  participante={participante}
                />
              ))}
            </ul>
            <CustomButton type="submit" className={styles.submitButton}>
              {enviarLoading ? (
                <BeatLoader color="#e3edd5" size={10} />
              ) : (
                "Enviar voto"
              )}
            </CustomButton>
            <span className={styles.error}>{error}</span>
          </>
        )}
      </form>
    </div>
  );
};
