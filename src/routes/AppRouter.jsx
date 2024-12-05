import { Routes, Route, Outlet } from "react-router";
import { Details, Home, Login, Register, Reservations, Config } from "../app";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Protected from "./Protected";
import Public from "./Public";
import { LanguageProvider } from '../containers/Language';

function AppRouter() {
  return (
    <LanguageProvider> 
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/hotel/:id" element={<Details />} />
        <Route path="config" element={<Config />} />
        <Route path="/reservations" element={
          <Protected >
            <Reservations />
          </Protected>
          } />      
      </Route>
      <Route element={ 
        <Public>
          <AuthLayout />
        </Public>
      } >
        <Route path="config" element={<Config />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </LanguageProvider>
  );
}

export default AppRouter;