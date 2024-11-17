import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth/authContext';

export const ProtectedRoutes = () => {
  const { auth } = useContext(AuthContext);  // Usamos el contexto para obtener el token

  // Si el token no está presente, redirigimos al login
  if (!auth) {
    return <Navigate to="/login" />;
  }

  // Si el token está presente, renderizamos las rutas hijas
  return <Outlet />;
};
