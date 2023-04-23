import { FC, ReactElement } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";

interface IProtectedRouteElementProps {
  element: ReactElement;
}

export const ProtectedRouteElement: FC<IProtectedRouteElementProps> = ({ element }) => {
  const location = useLocation();

  return getCookie("isAuthenticated") ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
