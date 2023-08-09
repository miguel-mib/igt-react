import { NavLink } from "react-router-dom";
import classes from "./AdmNavbar.module.sass";
import ArticleIcon from '@mui/icons-material/Article';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import PrintIcon from '@mui/icons-material/Print';

const AdmNavbar = () => {
  return (
    <div className={classes["wrapper"]}>
      <ul className={classes["list"]}>
        <li className={classes["item"]}>
          <NavLink to="/adm/pedidos" className={({isActive}) => isActive ? classes["active"] : undefined}>
            <ArticleIcon />
            <span>Candidatos</span>
          </NavLink>
        </li>
        <li className={`${classes["item"]} ${classes["disable"]}`}>
          <NavLink to="/adm/placar" className={({isActive}) => isActive ? classes["active"] : undefined}>
            <ScoreboardIcon />
          </NavLink>
        </li>
        <li className={classes["item"]}>
          <NavLink to="/adm/gerador" className={({isActive}) => isActive ? classes["active"] : undefined} >
            <PrintIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdmNavbar;
