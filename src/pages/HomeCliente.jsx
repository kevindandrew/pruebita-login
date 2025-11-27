import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function HomeCliente() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }

    async function traerPerfil() {
      try {
        const respuesta = await fetch(
          "https://api-funval-g6.onrender.com/auth/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await respuesta.json();
        console.log(data);
        setUser(data);
      } catch (error) {}
    }
    traerPerfil();
  }, []);

  function cerrarSesion() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <header className="w-full h-20 bg-blue-600 text-white flex items-center justify-center">
        <ul className="flex justify-around w-full items-center">
          <li>{user.email}</li>
          <li>{user.role}</li>
          <li className="flex gap-2 items-center justify-center">
            {user.name}
            <button
              className="bg-red-900 text-white p-2 rounded-2xl"
              onClick={cerrarSesion}
            >
              cerrar Sesion
            </button>
          </li>
        </ul>
      </header>
      <main className=" flex items-center justify-center h-screen">
        <h2>Bienvenido a tu perfil {user.name}</h2>
      </main>
    </div>
  );
}
