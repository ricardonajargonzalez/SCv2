import { Routes, Route } from "react-router-dom"

import { AppRoutes } from "../App/routes/AppRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"




export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* App Citas */}
        <Route path="/*" element={ <AppRoutes /> } />

    </Routes>
  )
}
