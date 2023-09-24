import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login, NotFound, Votacao } from "../pages";
import { RootSelector } from "../shared/store/selectors";
import { useSelector } from "react-redux";

export const AppRoutes: React.FC = () => {
  const logado = useSelector((state: RootSelector) => state.auth.logado);

  const TelaLogin = logado ? <Navigate to="/votar" /> : <Login />;
  const TelaVotacao = logado ? <Votacao /> : <Navigate to="/" />;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>  
        <Route index element={TelaLogin} />
        <Route path="/votar" element={TelaVotacao} />
        <Route path="/*" element={<NotFound />} />
      </>
    ),
    { basename: "/igt" }
  );

  return <RouterProvider router={router} />;
};
