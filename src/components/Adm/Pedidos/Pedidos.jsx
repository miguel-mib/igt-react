import Candidato from "./Candidato/Candidato";
import candidatosJSON from "./CandidatosTeste.json";
import classes from "./Pedidos.module.sass";
import { useState } from "react";

const AdmPedidos = () => {
  const [candidatos, setCandidatos] = useState(
    candidatosJSON.filter((candidato) => candidato.aceito === 0)
  );
  const [aceitos, setAceitos] = useState(
    candidatosJSON.filter((candidato) => candidato.aceito === 1)
  );
  const [recusados, setRecusados] = useState(
    candidatosJSON.filter((candidato) => candidato.aceito === 2)
  );

  const removerCandidato = (index) => {
    setCandidatos((prevArray) => {
      const array = [...prevArray];
      array.splice(index, 1);
      return array
    });
  };

  const aceitarHandle = (id, index, candidato) => {
    setAceitos((prevArray) => {
      const array = [...prevArray];
      array.push(candidato);
      return array;
    });
    removerCandidato(index);
    console.log(id, index);
    //mandar o coiso pra aceitar
  };

  const recusarHandle = (id, index, candidato) => {
    setRecusados((prevArray) => {
      const array = [...prevArray];
      array.push(candidato);
      return array;
    });
    removerCandidato(index);
    console.log(id, index);
    //mandar o coiso pra recusar
  };

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["candidatos"]}>
        <h1>Candidatos pendentes</h1>
        <div className={classes["pendentes"]}>
          {candidatos.map((candidato, index) => (
            <Candidato
              showButtons={true}
              key={index}
              index={index}
              candidato={candidato}
              onAceitar={aceitarHandle}
              onRecusar={recusarHandle}
            />
          ))}
        </div>
        <h1>Candidatos aceitos</h1>
        <div className={classes["aceitos"]}>
          {aceitos.map((candidato, index) => (
            <Candidato showButtons={false} key={index} candidato={candidato} />
          ))}
        </div>
        <h1>Candidatos recusados</h1>
        <div className={classes["recusados"]}>
          {recusados.map((candidato, index) => (
            <Candidato showButtons={false} key={index} candidato={candidato} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmPedidos;
