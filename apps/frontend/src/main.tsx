import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/index.tsx'
import Chat from './pages/Chat/index.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import './i18n/config.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
