import './App.css'
import AppRoutes from './Routes'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <span className='border-4 text-lg text-white border-white font-bold m-3 rounded-xl p-8 sm flex justify-center items-center'>Começando os trabalhos</span>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
