import { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]);

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

export default Contador;