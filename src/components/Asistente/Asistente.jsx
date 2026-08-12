export default function Asistente({ nombre, tarea, emoji }) {
  return (
    <div className="contenedorPrincipal">
      <h3 className="nombre">{nombre}</h3>
      <p className="presentacion">
        {tarea} {emoji}
      </p>
    </div>
  )
}
