import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom"
import { routes } from "./routes"
import './index.css'

function Router() {
  const element = useRoutes(routes)
  return element
}

function RouteBackground() {
  const location = useLocation()

  useEffect(() => {
    document.body.dataset.route = location.pathname
  }, [location.pathname])

  return null
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RouteBackground />
      <Router />
    </BrowserRouter>
  </StrictMode>
)