import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CuentaNueva from "./pages/CuentaNueva";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newuser" element={<CuentaNueva />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
