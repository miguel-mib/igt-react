import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InscreverForm from "../../components/Auth/Inscrever/InscreverForm";
import Button from "../../components/UI/Button/Button";
import Logo from "../../assets/logo.svg";

import classes from "./Inscrever.module.sass";

const InscreverRoot = () => {
  const [showLoader, setShowLoader] = useState(false);

  const onFormSubmitHandle = (data) => {
    const { nome, tel, turma, categoria, exp, linksArray, foto } = data;
    const postForm = async () => {
      setShowLoader(true);
      try {
        const response = await axios.post(
          "https://igt-skeleton-api-default-rtdb.firebaseio.com/teste-participantes.json",
          {
            nome,
            tel,
            turma,
            categoria,
            exp,
            linksArray,
            foto,
          }
        );

        const { data } = response;

        return data;
      } catch (error) {
        console.log(error);
      }
    };

    postForm();
    setShowLoader(false);
  };

  return (
    <>
      <div
        className={`${classes["loader__wrapper"]} ${
          showLoader && classes["show"]
        }`}
      >
        <div className={classes["loader"]} />
      </div>
      <div className={classes["inscrever__wrapper"]}>
        <img src={Logo} alt="IGT_Logo" />
        <div className={classes["inscrever__section"]}>
          <h1>Inscrição</h1>
          <InscreverForm onFormSubmit={onFormSubmitHandle} />
        </div>
        <div className={classes["button__entrar"]}>
          <Link to="/entrar">
            <Button>Entrar</Button>
          </Link>
        </div>
        <p className={classes["cr"]}>IGT © 2023</p>
      </div>
    </>
  );
};

export default InscreverRoot;

