import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeCliente from "./pages/HomeCliente";
import CuentaNueva from "./pages/CuentaNueva";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newuser" element={<CuentaNueva />} />
        <Route element={<ProtectedRoute RolUser={["admin"]} />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute RolUser={["cliente", "admin"]} />}>
          <Route path="/Cliente" element={<HomeCliente />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
