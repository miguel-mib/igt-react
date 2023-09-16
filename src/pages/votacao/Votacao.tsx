import { useSelector } from "react-redux";
import { RootSelector } from "../../shared/store/selectors";
import { CustomButton } from "../../shared/components";
import { _PARTICIPANTES } from "./_PARTICIPANTES";
import { Participante } from "../../shared/components/participante/Participante";
import styles from "./Votacao.module.sass";

export const Votacao: React.FC = () => {
  const voucher = useSelector(
    (state: RootSelector) => state.auth.user?.voucher
  );

  const participanteSelecionado = useSelector(
    (state: RootSelector) => state.participante
  );

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    console.log(voucher, participanteSelecionado);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.titulo}>Votação</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <ul className={styles.participantesList}>
          {_PARTICIPANTES.map(participante => (
            <Participante key={participante.id} participante={participante} />
          ))}
        </ul>
        <CustomButton type="submit" className={styles.submitButton}>
          Enviar voto
        </CustomButton>
      </form>
    </div>
  );
};
