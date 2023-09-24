import { useSelector } from "react-redux";
import { RootSelector } from "../../shared/store/selectors";
import { CustomButton, Candidato, ICandidato } from "../../shared/components";
import { useState, useEffect } from "react";
import { BeatLoader, MoonLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../shared/store/auth-reducer";
import styles from "./Votacao.module.sass";
import axios, { AxiosError } from "axios";

export const Votacao: React.FC = () => {
  const [votacaoLoading, setVotacaoLoading] = useState<boolean>(true);
  const [enviarLoading, setEnviarLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [candidatos, setCandidatos] = useState<ICandidato[]>(
    [] as ICandidato[]
  );

  const dispatch = useDispatch();

  const voucher = useSelector(
    (state: RootSelector) => state.auth.user?.voucher
  );

  const participanteSelecionado = useSelector(
    (state: RootSelector) => state.candidato
  );

  const handleFormSubmit: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault();
    setError(null);

    // if (Object.keys(participanteSelecionado).length === 0) {
    //   setError("Você precisa selecionar um participante.");
    //   return;
    // }

    setEnviarLoading(true);
    try {
      const response = await axios.get(
        `https://www.lifeeng.com.br/igt/api/api.php?option=votar&voucher=${voucher}&id=${participanteSelecionado.id}`
      );

      console.log(response.data);
      if (!response.data) throw new Error(response.data.message);

      // dispatch(logoutUser());
    } catch (e) {
      const error = e as AxiosError;

      const errorMessage = error.message || "Ocorreu um erro ao votar.";
      setError(errorMessage);
    } finally {
      setEnviarLoading(false);
    }
  };

  // get candidatos
  useEffect(() => {
    const getCandidato = async () => {
      try {
        const response = await axios.get(
          "https://www.lifeeng.com.br/igt/api/api.php?option=getcandidato"
        );

        const candidatosData: ICandidato[] = response.data;

        if (candidatosData.length <= 0)
          throw new Error("Nenhum candidato foi encontrado.");

        setCandidatos(candidatosData);
        setError(null);
      } catch (e) {
        const error = e as AxiosError;
        setError(error.message || "Ocorreu um erro ao buscar as provas.");
      } finally {
        setVotacaoLoading(false);
      }
    };

    getCandidato();
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.titulo}>Votação</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        {votacaoLoading ? (
          <MoonLoader color="#f7bb4c" size={50} />
        ) : (
          candidatos.length > 0 && (
            <>
              <ul className={styles.participantesList}>
                {candidatos.map(candidato => (
                  <Candidato key={candidato.id} candidato={candidato} />
                ))}
              </ul>
              <CustomButton type="submit" className={styles.submitButton}>
                {enviarLoading ? (
                  <BeatLoader color="#e3edd5" size={10} />
                ) : (
                  "Enviar voto"
                )}
              </CustomButton>
            </>
          )
        )}
        <span className={styles.error}>{error}</span>
      </form>
    </div>
  );
};
