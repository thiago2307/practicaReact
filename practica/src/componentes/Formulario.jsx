import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Registrarse</button>
      <button type="button" onClick={() => { setNombre(""); setEmail(""); }}>Limpiar</button>
    </form>
  );
}

export default Registro;
