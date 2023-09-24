import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCandidato } from "../../store/candidato-reducer";
import { useSelector } from "react-redux";
import { RootSelector } from "../../store/selectors";
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
  candidato: { nome, titulo, categoria, id },
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
    <li className={`${styles.card} ${selecionado && styles.selecionado}`}>
      <div className={styles.visual}>
        <div className={styles.categoria}>{categoria}</div>
      </div>
      <div className={styles.infos}>
        <span className={styles.nome}>{nome}</span>
        <span className={styles.titulo}>{titulo}</span>
        <button
          className={styles.selectBtn}
          id="participante"
          type="button"
          onClick={handleSelect}
        >
          {selecionado ? "Selecionado" : "Selecionar"}
        </button>
      </div>
    </li>
  );
};
