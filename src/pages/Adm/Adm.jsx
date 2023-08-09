import { Outlet } from "react-router-dom";
import AdmNavbar from "../../components/Adm/AdmNavbar/AdmNavbar";

const AdmRoot = () => {
  return (
    <>
      <Outlet />
      <AdmNavbar />
    </>
  );
};

export default AdmRoot;
