import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { ForgotPasswordPage } from "./pages/forgotPassword";
import { ResetPasswordPage } from "./pages/resetPassword";
import { ProfilePage } from "./pages/profile";
import { OrdersPage } from "./pages/orders";
import { NotFoundPage } from "./pages/notFoundPage";
import { IngredientDetails } from "./components/IngredientDetails/IngredientDetails";
import { ProtectedRouteElement } from "./components/ProtectedRouteElement/ProtectedRouteElement";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
        </Route>
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        />
        <Route
          path="/orders"
          element={<ProtectedRouteElement element={<OrdersPage />} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
