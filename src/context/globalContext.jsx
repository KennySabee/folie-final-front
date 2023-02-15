import { useState, createContext } from 'react';
import clienteAxios from '../config/axios'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [product, setProduct] = useState()
  const [success, setSuccess] = useState(false)
  const [ok, setOk] = useState(false)
  const [oneProduct, setOneProduct] = useState({})

  const getProduct = async () => {
    try {

      // si no añado el folie final front me da errores? y no se carga lña pag queda en blanco
      const res = await clienteAxios.get('/products/list')
      console.log('123')
      setProduct(res.data.products)
      setSuccess(true)

    } catch (error) {
      console.log(error)
    }
  }

  const getId = async (customerId) => {
    try {
      const res = await clienteAxios.get(`/list/${customerId}`)
      setOneProduct(res.data)
      setOk(true)
    } catch (error) {
      console.log(error)
    }
  }

 


  const data = {
    product,
    setProduct,
    getProduct,
    success,
    setSuccess,
    getId,
    oneProduct,
    setOneProduct,
    ok, 
    setOk, 

  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}