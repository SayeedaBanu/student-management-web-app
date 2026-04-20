import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../modules/auth/Login";
import Dashboard from "../modules/dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}