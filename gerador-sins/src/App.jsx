
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PaginaPadrao } from './PaginaPadrao'
import { Inicio } from './Pages/Inicio'
import { Certificados } from './Pages/Certificados'
import { Sucesso } from './Pages/Sucesso'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao /> }>
          <Route index element={<Inicio />}></Route>
          <Route path='/certificados' element={<Certificados /> } ></Route>
          <Route path='/sucesso' element={<Sucesso />}></Route>
          <Route path='/sucesso/:info' element={<Sucesso />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
