import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { HomePage } from "../../pages/home";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { ForgotPasswordPage } from "../../pages/forgotPassword";
import { ResetPasswordPage } from "../../pages/resetPassword";
import { ProfilePage } from "../../pages/profile";
import { OrdersPage } from "../../pages/orders";
import { NotFoundPage } from "../../pages/notFoundPage";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { ProtectedRouteElement } from "../ProtectedRouteElement/ProtectedRouteElement";
import { getIngredients } from "../../services/actions/getIngredients";

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const modal = location?.state?.modal;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {modal ? (
            <Route
              path="ingredients/:id"
              element={<IngredientDetails modal={true} />}
            />
          ) : (
            <Route
              path="ingredients/:id"
              element={<IngredientDetails modal={false} />}
            />
          )}
        </Route>
        <Route
          path="profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        />
        <Route
          path="orders"
          element={<ProtectedRouteElement element={<OrdersPage />} />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
