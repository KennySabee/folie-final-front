import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import Historial from './Components/Historial'
import Header from './Components/shared/Header'
import Register from './Components/pages/Register'
import Login from './Components/pages/Login'
import PrivateRoute from './Components/auth/PrivateRoute'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/historial' element={<Historial />} />
        </Route>
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
