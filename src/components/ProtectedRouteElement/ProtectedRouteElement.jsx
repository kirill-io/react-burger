import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";

export const ProtectedRouteElement = ({ element }) => {
  const location = useLocation();

  return getCookie("isAuthenticated") ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired,
};
