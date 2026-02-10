function  MiniApp() {
    const productos = [
    { id: 1, nombre: "Mouse", precio: 5000 },
    { id: 2, nombre: "Teclado", precio: 9000 },
    { id: 3, nombre: "Monitor", precio: 120000 },
    { id: 4, nombre: "Auriculares", precio: 7000 },
  ];

    const comprar = (nombre) => {
      alert(`Compraste el producto: ${nombre}`);
    };

  return  (
    <div>
      <h1>Productos</h1>;
      {productos.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>Precio: ${producto.precio}</p>
          <button onClick={() => comprar(producto.nombre)}>Comprar</button>
        </div>
      ))}
    </div>
  );
}

export default MiniApp;