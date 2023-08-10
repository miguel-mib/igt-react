import React from "react";
import classes from "./Candidato.module.sass";
import Button from "../../../UI/Button/Button";

const Candidato = (props) => {
  const { candidato } = props;
  const links = candidato.links.map((link, index) => (
    <a key={index} href={link}>
      {link}
    </a>
  ));

  const aceitarClickHandle = () => {
    props.onAceitar(candidato.id, props.index, candidato);
  };

  const recusarClickHandle = () => {
    props.onRecusar(candidato.id, props.index, candidato);
  };

  return (
    <div className={classes.card}>
      <div className={classes["content"]}>
        <h2>{candidato.nome}</h2>
        <p>
          <b>Telefone:</b> <a href={`tel:${candidato.tel}`}>{candidato.tel}</a>
        </p>
        <p>
          <b>Turma:</b> {candidato.turma}
        </p>
        <p>
          <b>Categoria:</b> {candidato.categoria}
        </p>
        <p>
          <b>Explicação: </b>
          {candidato.explicacao}
        </p>
        <p>
          <b>Links</b>
        </p>
        <div className={classes["links"]}>{links}</div>
      </div>
      {props.showButtons && (
        <div className={classes["buttons"]}>
          <Button onClick={aceitarClickHandle} className={classes["aceitar"]}>
            Aceitar
          </Button>
          <Button onClick={recusarClickHandle} className={classes["recusar"]}>
            Recusar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Candidato;
