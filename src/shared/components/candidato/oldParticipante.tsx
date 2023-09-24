import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCandidato } from "../../store/candidato-reducer";
import { useSelector } from "react-redux";
import { RootSelector } from "../../store/selectors";
import styles from "./Participante.module.sass";

interface IParticipanteProps {
  participante: {
    nome: string;
    turma: string;
    categoria: string;
    titulo: string;
    foto: string;
    id: string;
  };
}

export const Participante: React.FC<IParticipanteProps> = ({
  participante,
}) => {
  const dispatch = useDispatch();
  const { nome, turma, titulo, categoria, foto, id } = participante;

  const [selecionado, setSelecionado] = useState<boolean>(false);
  const IDParticipanteSelecionado = useSelector(
    (state: RootSelector) => state.participante.id
  );

  useEffect(() => {
    setSelecionado(IDParticipanteSelecionado === id);
  }, [IDParticipanteSelecionado, id]);

  const handleButtonClick = () => {
    dispatch(setCandidato({ id, nome }));
  };

  return (
    <li className={`${styles.card} ${selecionado && styles.selecionado}`}>
      <div className={styles.aluno}>
        <img className={styles.foto} src={foto} alt={nome} />
        <h1 className={styles.nome}>{nome}</h1>
        <span className={styles.turma}>{turma}</span>
      </div>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <h2 className={styles.categoria}>{categoria}</h2>
      </div>
      <button
        className={styles.selectBtn}
        type="button"
        onClick={handleButtonClick}
      >
        {selecionado ? "Selecionado" : "Selecionar"}
      </button>
    </li>
  );
};
