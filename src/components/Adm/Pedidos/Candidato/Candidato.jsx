import React from "react";
import classes from "./Candidato.module.sass";
import Button from "../../../UI/Button/Button";

const Candidato = (props) => {
  const { candidato } = props;
  return (
    <div className={classes.card}>
      <h2>{candidato.nome}</h2>
      <p>Telefone: {candidato.tel}</p>
      <p>Turma: {candidato.turma}</p>
      <p>Categoria: {candidato.categoria}</p>
      <p>Explicação: {candidato.explicacao}</p>
      <div className={classes["buttons"]}>
        <Button className={classes["aceitar"]}>Aceitar</Button>
        <Button className={classes["recusar"]}>Recusar</Button>
      </div>
    </div>
  );
};

export default Candidato;
