import { useState } from "react";

function Contador() {
const [contador, setContador] = useState(0);

     const sumar = () => {
      setContador(contador + 1);
    };
    
     const restar = () => {
      setContador(contador - 1);
    };

  return (
    <>
  <h1>{contador} </h1>
  <button onClick={restar}>Restar</button>
  <button onClick={sumar}>Sumar</button>
  
    </>
  )
}
export default Contador;