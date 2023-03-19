import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies";

export const ProtectedRouteElement = ({ element }) => {
  return getCookie("isAuthenticated") ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired,
};
