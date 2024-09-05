import { Routes, Route } from 'react-router-dom'
import Departamentos from '../Pages/Departamentos/Listagem';
import FormDepartamentos from '../Pages/Departamentos/Forms';

const AppRoutes = () => {
  return(
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/departamentos" element={<Departamentos/>}/>
    <Route path="/departamentos/new" element={<FormDepartamentos/>}/>
    <Route path="/departamentos/edit" element={<h1>Editar Departamento</h1>}/>
    <Route path="/*" element={<h1>404</h1>}/>
  </Routes>
  )
}

export default AppRoutes;
