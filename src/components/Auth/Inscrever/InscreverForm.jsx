import classes from "./InscreverForm.module.sass";
import { useState } from "react";
import Button from "../../UI/Button/Button";
import useInput from "../../../hooks/use-input";
import useMultipleInput from "../../../hooks/use-multiple-input";

const InscreverForm = (props) => {
  const [error, setError] = useState({ show: false, message: "" });

  const {
    value: nome,
    isValid: nomeIsValid,
    hasError: nomeHasError,
    valueChangeHandle: nomeChangeHandle,
    inputBlurHandle: nomeInputBlurHandle,
    reset: nomeReset,
  } = useInput((nome) => nome.trim().split(" ").length >= 2);

  const {
    value: tel,
    isValid: telIsValid,
    hasError: telHasError,
    valueChangeHandle: telChangeHandle,
    inputBlurHandle: telInputBlurHandle,
    reset: telReset,
  } = useInput((tel) => tel.trim().length >= 9);

  const {
    value: turma,
    isValid: turmaIsValid,
    hasError: turmaHasError,
    valueChangeHandle: turmaChangeHandle,
    inputBlurHandle: turmaInputBlurHandle,
    reset: turmaReset,
  } = useInput((turma) => turma.trim() !== "");

  const {
    value: categoria,
    isValid: categoriaIsValid,
    hasError: categoriaHasError,
    valueChangeHandle: categoriaChangeHandle,
    inputBlurHandle: categoriaInputBlurHandle,
    reset: categoriaReset,
  } = useInput((categoria) => categoria.trim() !== "");

  const {
    value: foto,
    isValid: fotoIsValid,
    hasError: fotoHasError,
    valueChangeHandle: fotoChangeHandle,
    inputBlurHandle: fotoInputBlurHandle,
    reset: fotoReset,
  } = useInput((inputFoto) => inputFoto);

  const {
    value: exp,
    isValid: expIsValid,
    hasError: expHasError,
    valueChangeHandle: expChangeHandle,
    inputBlurHandle: expInputBlurHandle,
    reset: expReset,
  } = useInput((exp) => exp.trim() !== "");

  const {
    valuesArray: linksArray,
    hasErrorArray: linksHasErrorArray,
    isValidArray: linksIsValidArray,
    valueChangeHandle: linksChangeHandle,
    inputBlurHandle: linksInputBlurHandle,
    addValueHandle: linksAddValueHandle,
    reset: linksArrayReset,
  } = useMultipleInput((URL) => URL);

  const linksInputArray = linksArray.map((linkValue, index) => {
    const isLastInput = linksArray.length - 1 === index;
    const inputClass = isLastInput
      ? `${classes["links__input"]} ${classes["links__item"]}`
      : "";
    console.log(inputClass);
    return (
      <input
        key={index}
        type="url"
        id="link"
        value={linkValue}
        placeholder="Link"
        onChange={(event) => {
          linksChangeHandle(index, event.target.value);
        }}
        onBlur={() => {
          linksInputBlurHandle(index);
        }}
        className={
          linksHasErrorArray[index]
            ? `${classes["input-error"]} ${inputClass}`
            : inputClass
        }
      />
    );
  });

  const someIsInvalid = () => {
    const validation = [
      nomeIsValid,
      telIsValid,
      categoriaIsValid,
      turmaIsValid,
      expIsValid,
      fotoIsValid,
      ...linksIsValidArray,
    ];

    return validation.some((isValid) => !isValid);
  };

  const formSubmitHandle = (event) => {
    event.preventDefault();
    setError({ show: false, message: "" });

    if (someIsInvalid()) {
      setError({ show: true, message: "Formulário inválido." });
      return;
    } else {
      props.onFormSubmit({
        nome,
        tel,
        categoria,
        turma,
        exp,
        linksArray,
        foto,
      });

      nomeReset();
      telReset();
      turmaReset();
      categoriaReset();
      expReset();
      fotoReset();
      linksArrayReset();
    }
  };

  const turmas = Array.from({ length: 19 }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  const turmaOptions = turmas.map((turma) => (
    <option key={turma} id={turma} value={turma}>
      M{turma}
    </option>
  ));

  const categorias = [
    "Música",
    "Dança",
    "Artes visuais",
    "Stand Up",
    "Poesia",
    "Mágica",
    "Outros",
  ];

  const categoriaOptions = categorias.map((categoria, id) => (
    <option key={id} id={categoria} value={id}>
      {categoria}
    </option>
  ));

  return (
    <form onSubmit={formSubmitHandle}>
      <div className={classes["controls"]}>
        <div className={classes["control"]}>
          <input
            type="text"
            id="voucher"
            value={nome}
            placeholder="Nome completo"
            onChange={nomeChangeHandle}
            onBlur={nomeInputBlurHandle}
            className={nomeHasError ? classes["input-error"] : ""}
          />
          <input
            type="tel"
            id="telefone"
            value={tel}
            placeholder="Telefone"
            onChange={telChangeHandle}
            onBlur={telInputBlurHandle}
            className={telHasError ? classes["input-error"] : ""}
          />
        </div>
        <div className={classes["control"]}>
          <select
            onChange={turmaChangeHandle}
            onBlur={turmaInputBlurHandle}
            className={`${turma && classes["opened"]} ${
              turmaHasError ? classes["input-error"] : ""
            }`}
            value={turma}
          >
            <option value="" disabled hidden>
              Turma
            </option>
            {turmaOptions}
          </select>
          <select
            onChange={categoriaChangeHandle}
            onBlur={categoriaInputBlurHandle}
            className={`${categoria && classes["opened"]} ${
              categoriaHasError ? classes["input-error"] : ""
            }`}
            value={categoria}
          >
            <option value="" disabled hidden>
              Categoria
            </option>
            {categoriaOptions}
          </select>
          <textarea
            type="text"
            id="exp"
            value={exp}
            placeholder="Explicação"
            onBlur={expInputBlurHandle}
            onChange={expChangeHandle}
            className={expHasError ? classes["input-error"] : ""}
          />
        </div>
        <div className={`${classes["control"]} ${classes["links__control"]}`}>
          <div className={classes["links"]}>{linksInputArray}</div>
          <button
            className={classes["links__button"]}
            onClick={linksAddValueHandle}
          >
            +
          </button>
        </div>
        <div className={classes["control"]}>
          <label
            htmlFor="foto"
            className={`${classes["label__foto"]} ${
              foto && classes["opened"]
            } ${fotoHasError ? classes["input-error"] : ""}`}
          >
            {foto || "Foto - Preferencialmente 3x4"}
          </label>
          <input
            type="file"
            id="foto"
            className={classes["input__foto"]}
            value={foto}
            onBlur={fotoInputBlurHandle}
            onChange={fotoChangeHandle}
            accept="image/*"
          />
        </div>
        <p className={`${classes["erro"]} ${error.show && classes["show"]}`}>
          {error.message}
        </p>
        <Button type="submit">ENVIAR</Button>
      </div>
    </form>
  );
};

export default InscreverForm;
