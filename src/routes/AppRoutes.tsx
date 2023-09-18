import {
  //  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Home, Login, NotFound, Votacao } from "../pages";
import { RootSelector } from "../shared/store/selectors";
import { useSelector } from "react-redux";

export const AppRoutes: React.FC = () => {
  const logado = useSelector((state: RootSelector) => state.auth.logado);

  const TelaLogin = logado ? <Navigate to="/igt/votacao" /> : <Login />;
  const TelaVotacao = logado ? <Votacao /> : <Navigate to="/igt/entrar" />;

  console.log(import.meta.env.BASE_URL);

  return (
    // <BrowserRouter
    // basename={import.meta.env.BASE_URL}
    // >
    <Routes>
      <Route index path="/igt" element={<Home />} />
      <Route path="/igt/votacao" element={TelaVotacao} />

      <Route index path="/igt/entrar" element={TelaLogin} />

      <Route path="/igt/*" element={<NotFound />} />
    </Routes>
    // </BrowserRouter>
  );
};
