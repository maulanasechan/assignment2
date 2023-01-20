import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.user);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
