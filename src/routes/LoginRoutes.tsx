import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login, LoginAdm, NotFound } from "../pages";

export const LoginRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/entrar" element={<Login />} />
        <Route index path="/adm/entrar" element={<LoginAdm />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/entrar" />} />
      </Routes>
    </BrowserRouter>
  );
};
