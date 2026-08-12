import "./App.css"
import Bienvenida from "./components/EstructuraPrincipal/Bienvenida"
import CuerpoPost from "./components/EstructuraPrincipal/CuerpoPost"
import Encabezado from "./components/EstructuraPrincipal/Encabezado"
import PieDePosteo from "./components/EstructuraPrincipal/PieDePosteo"
import Asistente from "./components/Asistente/Asistente"

const asistentes = [
  { nombre: "Juan Pérez", tarea: "Frontend Developer", emoji: "💻" },
  { nombre: "Ana Gómez", tarea: "Diseñadora UX/UI", emoji: "🎨" },
  { nombre: "Carlos Ruiz", tarea: "Backend Developer", emoji: "⚙️" },
]

function App() {
  return (
    <>
      <Bienvenida />
      <Encabezado />
      <CuerpoPost />
      <PieDePosteo />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "20px",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {asistentes.map((asistente, index) => (
          <Asistente
            key={index}
            nombre={asistente.nombre}
            tarea={asistente.tarea}
            emoji={asistente.emoji}
          />
        ))}
      </div>
    </>
  )
}

export default App
