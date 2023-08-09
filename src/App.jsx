import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";
import AdmRoot from "./pages/Adm/Adm";
import EntrarRoot from "./pages/Auth/Entrar";
import InscreverRoot from "./pages/Auth/Inscrever";
import AdmPedidos from "./components/Adm/Pedidos/Pedidos";
import AdmPlacar from "./components/Adm/Placar/Placar";
import AdmGerador from "./components/Adm/Gerador/Gerador";
import Testes from "./Testes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/entrar" />,
    ErrorPage: <ErrorPage />,
  },
  {
    path: "/entrar",
    element: <EntrarRoot />
  },
  {
    path: "/inscricao",
    element: <InscreverRoot />,
  },
  {
    path: "/adm",
    element: <AdmRoot />,
    children: [
      {path: "/adm/pedidos", element: <AdmPedidos />},
      {path: "/adm/placar", element: <AdmPlacar />},
      {path: "/adm/gerador", element: <AdmGerador />},
    ]
  },
  {
    path: "/testes",
    element: <Testes />
  }
]);

const App = () => {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
