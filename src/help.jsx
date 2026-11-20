import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelpPage from './components/sections/HelpPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelpPage />
  </StrictMode>,
)
