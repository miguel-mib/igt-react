import EntrarForm from "../../components/Auth/Entrar/EntrarForm";
import classes from "./Entrar.module.sass";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Logo from "../../assets/logo.svg";
import InstagramLogo from "../../assets/instagram-colored.svg";

const EntrarRoot = () => {
  const navigator = useNavigate()
  const onFormSubmitHandle = (voucher) => {
    console.log(`Logando no sistema com o voucher ${voucher}...`);

    if (voucher === "adm") {
      navigator("/adm/pedidos")
    }
  };

  return (
    <div className={classes["entrar__wrapper"]}>
      <img src={Logo} alt="IGT_Logo" />
      <div className={classes["entrar__section"]}>
        <h1>Entrar</h1>
        <EntrarForm onFormSubmit={onFormSubmitHandle} />
        <a
          className={classes["button__ig"]}
          href="https://www.instagram.com/ifes.gottalent/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={InstagramLogo} alt="INSTAGRAM_Logo" />
        </a>
      </div>
      <div className={classes["button__participar"]}>
        <Link to="/inscricao">
          <Button>Inscrever-se</Button>
        </Link>
      </div>
      <p className={classes["cr"]}>IGT © 2023</p>
    </div>
  );
};

export default EntrarRoot;
