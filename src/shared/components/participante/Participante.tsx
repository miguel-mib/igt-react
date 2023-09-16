import { useDispatch } from "react-redux";
import styles from "./Participante.module.sass";
import { MouseEventHandler, useEffect, useState } from "react";
import { setParticipante } from "../../store/participante-reducer";
import { useSelector } from "react-redux";
import { RootSelector } from "../../store/selectors";

export interface IParticipanteProps {
  participante: {
    nome: string;
    turma: string;
    categoria: string;
    titulo: string;
    id: string;
  };
}

export const Participante: React.FC<IParticipanteProps> = ({
  participante,
}) => {
  const dispatch = useDispatch();
  const { nome, turma, titulo, categoria, id } = participante;

  const [selecionado, setSelecionado] = useState<boolean>(false);
  const IDParticipanteSelecionado = useSelector(
    (state: RootSelector) => state.participante.id
  );

  useEffect(() => {
    setSelecionado(IDParticipanteSelecionado === id);
  }, [IDParticipanteSelecionado, id]);

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setParticipante({ id, nome }));
  };

  return (
    <li className={`${styles.card} ${selecionado && styles.selecionado}`}>
      <h1 className={styles.nome}>{nome}</h1>
      <h2 className={styles.turma}>{turma}</h2>
      <h2 className={styles.titulo}>{titulo}</h2>
      <h2 className={styles.categoria}>{categoria}</h2>
      <button
        className={styles.selecionarButton}
        type="button"
        onClick={handleButtonClick}
      >
        {selecionado ? "Selecionado" : "Selecionar"}
      </button>
    </li>
  );
};
