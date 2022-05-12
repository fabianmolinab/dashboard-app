import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../pages/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardRoutes />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
