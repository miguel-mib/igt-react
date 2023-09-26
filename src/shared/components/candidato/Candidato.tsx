import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCandidato } from "../../store/candidato-reducer";
import { useSelector } from "react-redux";
import { RootSelector } from "../../store/selectors";
import { FiCheck } from "react-icons/fi";
import styles from "./Candidato.module.sass";

export interface ICandidato {
  id: number;
  categoria: string;
  nome: string;
  sala: string;
  titulo: string;
  votos: number;
}

interface ICandidatoProps {
  candidato: ICandidato;
}

export const Candidato: React.FC<ICandidatoProps> = ({
  candidato: { nome, titulo, categoria, id, sala },
}) => {
  const dispatch = useDispatch();

  const [selecionado, setSelecionado] = useState<boolean>(false);
  const IDParticipanteSelecionado = useSelector(
    (state: RootSelector) => state.candidato.id
  );

  useEffect(() => {
    setSelecionado(IDParticipanteSelecionado === id);
  }, [IDParticipanteSelecionado, id]);

  const handleSelect = () => {
    dispatch(setCandidato({ id }));
  };

  return (
    <li
      className={`${styles.card} ${selecionado && styles.selecionado}`}
      id={`${id}`}
    >
      <div className={styles.borderWrapper}>
        <span className={styles.nome}>{nome}</span>
        <span className={styles.sala}>{sala}</span>
        <div className={styles.aprInfo}>
          <span className={styles.categoria}>{categoria}</span>
          <span className={styles.titulo}>{titulo}</span>
        </div>
        <button
          className={styles.selectBtn}
          id="participante"
          type="button"
          onClick={handleSelect}
        >
          {selecionado ? "Selecionado" : "Selecionar"}
        </button>
      </div>
      <div className={styles.checkmarkWrapper}>
        <FiCheck color="#FFF6F5" size={27} className={styles.checkmark} />
      </div>
    </li>
  );
};
