import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Header/Header";
import { HomePage } from "../../pages/home";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import { ForgotPasswordPage } from "../../pages/forgotPassword";
import { ResetPasswordPage } from "../../pages/resetPassword";
import { FeedPage } from "../../pages/feed";
import { Feed } from "../Feed/Feed";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import { ProfilePage } from "../../pages/profile";
import { OrdersPage } from "../../pages/orders";
import { NotFoundPage } from "../../pages/notFoundPage";
import { IngredientContent } from "../IngredientContent/IngredientContent";
import { ProtectedRouteElement } from "../ProtectedRouteElement/ProtectedRouteElement";
import { getIngredients } from "../../services/actions/getIngredients";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="ingredients/:id" element={<ModalWrapper element={<IngredientContent />} />} />
        </Route>
        <Route path="feed" element={<FeedPage />}>
          <Route path="/feed/:id" element={<ModalWrapper element={<Feed />} />} />
        </Route>
        <Route
          path="profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        />
        <Route
          path="orders"
          element={<ProtectedRouteElement element={<OrdersPage />} />}
        >
          <Route path="/orders/:id" element={<ModalWrapper element={<Feed />} />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
