import { Routes, Route, Outlet } from "react-router";
import { Details, Home, Login, Register, Reservations } from "../app";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/hotel/:id" element={<Details />} />
        <Route path="/reservations" element={<Reservations />} />      
      </Route>
      <Route element={  <AuthLayout />   } >
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;