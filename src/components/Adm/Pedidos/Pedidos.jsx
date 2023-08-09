import Candidato from "./Candidato/Candidato";
import candidatos from "./CandidatosTeste.json";
import classes from "./Pedidos.module.sass";

const AdmPedidos = () => {
  return (
    <div className={classes["wrapper"]}>
      <h1>Candidatos</h1>
      <div className={classes["candidatos"]}>
        {candidatos.map((candidato, index) => (
          <Candidato key={index} candidato={candidato} />
        ))}
      </div>
    </div>
  );
};

export default AdmPedidos;
