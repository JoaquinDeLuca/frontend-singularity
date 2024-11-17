import { Route } from "react-router-dom"
import Home from "../pages/home/Home"
import Layout from "../components/Layouts/mainLayout/Layout"
import { ProtectedRoutes } from "../components/protectedRoutes/ProtectedRoutes"

// Comentario: acá reutilice home cambiendole el texto
// Pero en realidad irian las pages correspondientes, que estarian en la carpeta 'pages'
// los nombres de la carpeta, ej: 'home'' reflejan la ruta en la que se enceuentra

export const usePrivateRoutes = () => {
  return (
    <Route element={<ProtectedRoutes />}>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/location" element={<Home titlePage="Location" />} />
        <Route path="/blog" element={<Home titlePage="Blog" />} />
        <Route path="/services" element={<Home titlePage="Services" />} />
        <Route path="/about" element={<Home titlePage="About Us" />} />
        <Route path="/franchise" element={<Home titlePage="Franchise" />} />
      </Route>
    </Route>
  )
}
