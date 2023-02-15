import React, { useContext, useState, useEffect } from 'react'
import '../../App.css';
import { AppContext } from './../../context/globalContext'
import ShowProducts from './ShowProducts';

function Catalog() {
  const productCtx =  useContext(AppContext)
  console.log(productCtx)
  const { product, getProduct, success, getId } = productCtx

  useEffect(() => {
    getProduct()
  }, [])
  
  return (
    <>
       <h2 className='page-subtitle'>Nuestros Productos</h2>
      <p className='page-subtitle'>Entre nuestras colecciones encontrarás desde los estilos tailandeses más tradicionales hasta los más modernos.</p>

      <div className='product-container' fluid="md">

        {/* {success ? (
          <ShowProducts products={product} isCatalog={true}/>
        )
          : null} */}
          <ShowProducts products={product} isCatalog={true}/>


      </div>
    </>
  )
}

export default Catalog