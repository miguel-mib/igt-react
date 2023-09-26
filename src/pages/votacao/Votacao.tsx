import { useSelector } from "react-redux";
import { RootSelector } from "../../shared/store/selectors";
import { CustomButton, Candidato, ICandidato } from "../../shared/components";
import { useState, useEffect } from "react";
import { BeatLoader, MoonLoader } from "react-spinners";
import axios, { AxiosError } from "axios";
import styles from "./Votacao.module.sass";

export const Votacao: React.FC = () => {
  const [votacaoLoading, setVotacaoLoading] = useState<boolean>(true);
  const [enviarLoading, setEnviarLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [candidatos, setCandidatos] = useState<ICandidato[]>(
    [] as ICandidato[]
  );

  const user = useSelector((state: RootSelector) => state.auth.user);

  const participanteSelecionado = useSelector(
    (state: RootSelector) => state.candidato
  );

  const handleFormSubmit: React.FormEventHandler<
    HTMLFormElement
  > = async event => {
    event.preventDefault();
    setError(null);

    if (enviarLoading) return;

    if (!participanteSelecionado.id) {
      setError("Nenhum candidato selecionado.");
      return;
    }

    setEnviarLoading(true);
    try {
      const response = await axios.get(
        `https://www.lifeeng.com.br/igt/api/api.php?option=votar&voucher=${user?.voucher}&id=${participanteSelecionado.id}`
      );

      if (!response.data) throw new Error(response.data.message);

      location.reload();
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
          `https://www.lifeeng.com.br/igt/api/api.php?option=getcandidato&voucher=${user?.voucher}&tipo=${user?.qvotos}`
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
  }, [user]);

  return (
    <div className={styles.main}>
      <h1 className={styles.titulo}>Votação</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        {votacaoLoading ? (
          <MoonLoader color="#b12c3e" size={50} />
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
