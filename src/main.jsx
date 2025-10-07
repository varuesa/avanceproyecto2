import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AppProvider } from './context/AppContext.jsx';

import App from './App.jsx';
import './css/index.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/avanceproyecto2">
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>

  </StrictMode>,
);
