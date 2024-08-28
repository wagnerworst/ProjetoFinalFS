import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'primeicons/primeicons.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/departamentos" element={<h1>Lista Departamentos</h1>}/>
          <Route path="/departamentos/new" element={<h1>Novo Departamento</h1>}/>
          <Route path="/departamentos/edit" element={<h1>Editar Departamento</h1>}/>
          <Route path="/*" element={<h1>404</h1>}/>
        </Routes>
    </BrowserRouter>
      <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
