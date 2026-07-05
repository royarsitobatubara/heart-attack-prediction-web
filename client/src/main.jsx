import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './presentation/pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/yuro'>
      <Routes>
        <Route index={true} element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
