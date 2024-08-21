// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppKitProvider } from './AppKitProvider'  // Import AppKitProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppKitProvider>  {/* Wrap your app with the AppKitProvider */}
      <App />
    </AppKitProvider>
  </StrictMode>,
)
