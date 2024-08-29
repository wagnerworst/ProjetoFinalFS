import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return(
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/departamentos" element={<h1>Lista Departamentos</h1>}/>
    <Route path="/departamentos/new" element={<h1>Novo Departamento</h1>}/>
    <Route path="/departamentos/edit" element={<h1>Editar Departamento</h1>}/>
    <Route path="/*" element={<h1>404</h1>}/>
  </Routes>
  )
}

export default AppRoutes;
