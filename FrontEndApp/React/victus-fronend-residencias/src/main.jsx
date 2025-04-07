import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AdminProviderWrapper } from './contexts/admin.context.jsx'
createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <AdminProviderWrapper>
    <BrowserRouter basename="/github-pages">
      <App />
    </BrowserRouter>
  </AdminProviderWrapper>
  //</StrictMode>,
)
