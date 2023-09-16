import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound, Votacao } from "../pages";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Votacao />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/entrar" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
