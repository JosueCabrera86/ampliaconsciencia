import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { LangProvider } from './context/langContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <Router>
        <App />
      </Router>
    </LangProvider>
  </StrictMode>,
)

