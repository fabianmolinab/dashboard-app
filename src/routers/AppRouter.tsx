import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../pages/LoginScreen/LoginScreen'
import { SignUp } from '../pages/SignUp/SignUp'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardRoutes />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
