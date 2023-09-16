import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, LoginAdm, NotFound, Votacao } from "../pages";
import { RootSelector } from "../shared/store/selectors";
import { useSelector } from "react-redux";

export const AppRoutes: React.FC = () => {
  const logado = useSelector((state: RootSelector) => state.auth.logado);

  const TelaLogin = logado ? <Navigate to="/votacao" /> : <Login />;
  const TelaVotacao = logado ? <Votacao /> : <Navigate to="/entrar" />;

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/votacao" element={TelaVotacao} />

        <Route index path="/entrar" element={TelaLogin} />
        <Route index path="/adm/entrar" element={<LoginAdm />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
