import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, NotFound } from "../pages";

export const AdmRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" element={<Navigate to="/adm" />} />
        <Route path="/adm/entrar" element={<Navigate to="/adm" />} />
        <Route path="/adm" element={<Dashboard />} />
        <Route path="/adm/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
