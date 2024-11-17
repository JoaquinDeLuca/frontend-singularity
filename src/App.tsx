import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/appRoutes"
import { AuthContextProvider } from "./context/auth/authProvider"

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
