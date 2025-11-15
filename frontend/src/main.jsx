import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/session/:sessionId" element={<App />} />
        <Route path="/" element={<Navigate to="/session/demo-session-1" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
