import { Navigate, Route, Routes } from "react-router-dom"
import { usePublicRoutes } from "./publicRoutes"
import { usePrivateRoutes } from './privateRoutes'
import NotFound from "../pages/404"

const AppRoutes = () => {
  const publicRoutes = usePublicRoutes();
  const privateRoutes = usePrivateRoutes();

  return (
    <Routes>

      {/* Redirección desde "/" a "/login" */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Rutas | páginas publicas  */}
      {publicRoutes}

      {/* Rutas | páginas privada o protegidas   */}
      {privateRoutes}

      {/* Rutas | páginas que no existes muestran notFound  */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes
