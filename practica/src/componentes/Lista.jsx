import { useState } from "react";

function Lista() {
  const productos = [
    { id: 1, nombre: "Mouse", precio: 5000 },
    { id: 2, nombre: "Teclado", precio: 9000 },
    { id: 3, nombre: "Monitor", precio: 120000 },
    { id: 4, nombre: "Auriculares", precio: 7000 },
  ];

  const [mostrarBaratos, setMostrarBaratos] = useState(true);

  const productosBaratos = productos.filter(p => p.precio < 8000);
  const productosCaros = productos.filter(p => p.precio >= 8000);
 

  const toggleProductos = () => {
    setMostrarBaratos(!mostrarBaratos);
  };

  return (
    <div>
        
    <ul>
  {productos.map(producto => (
    <li key={producto.id}>
      {producto.nombre} - ${producto.precio}
    </li>
  ))}
</ul>



      <button onClick={toggleProductos}>
        {mostrarBaratos ? "Mostrar productos caros" : "Mostrar productos baratos" }
      </button>

      <ul>
        {(mostrarBaratos ? productosBaratos : productosCaros).map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Lista;
