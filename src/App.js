import './App.css';

import React, { useContext, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'

import Catalog from './Components/pages/Catalog'
import Checkout from './Components/pages/Checkout'
import Home from './Components/pages/Home'
import Layout from './Components/shared/Layout'
import Login from './Components/pages/Login'
import NoPage from './Components/pages/NoPage'
import PrivateRoute from './Components/Auth/PrivateRoute'
import Product from './Components/shared/Product'
import Profile from './Components/pages/Profile'
import Register from './Components/pages/Register'

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/:id' element={<Product/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<NoPage/>}/>

        </Routes>
      </Layout>
  );
}

export default App;
