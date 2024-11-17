import { Route } from "react-router-dom"
import Login from "../pages/login/Login";

export const usePublicRoutes = () => {
  return (
    <>
      <Route path="/login" element={<Login />} />
    </>
  )
}

