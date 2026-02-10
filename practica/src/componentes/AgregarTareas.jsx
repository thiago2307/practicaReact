import { useState } from "react";

function TodoList() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button>Agregar</button>
      </form>

      <ul>
        {tareas.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => borrarTarea(index)}>borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
