import { AdmRoutes } from "./AdmRoutes";
import { AppRoutes } from "./AppRoutes";
import { useSelector } from "react-redux";
import { RootSelector } from "../shared/store/selectors";

export const Routes: React.FC = () => {
  const logado = useSelector((state: RootSelector) => state.auth.logado);
  const isAdm = useSelector((state: RootSelector) => state.auth.user?.adm);

  return logado && isAdm ? <AdmRoutes /> : <AppRoutes />;
};
