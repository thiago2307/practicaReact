import Footer from './componentes/Footer.jsx'
import Header from './componentes/header.jsx'
import Main from './componentes/main.jsx'
import Card from './componentes/Card.jsx'
import './App.css'
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
  <button onClick={sumar}>Sumar</button>
  <button onClick={restar}>Restar</button>
    </>
  )
}

export default Contador;
