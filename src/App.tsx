import './App.css'
import AppRoutes from './Routes'
import { BrowserRouter, Link } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='inline-flex justify-center align-middle w-full'>
          <Link className='p-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' to="/">Home</Link>
          <Link className='p-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r' to="/Departamentos">Departamentos</Link>
        </nav>

        <div className='w-full max-w-[calc(100vw-16px)] md:max-w-[1280px] mx-auto mt-6'>
          <div className='grid grid-cols-12 gap-1'>
          <AppRoutes/>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
