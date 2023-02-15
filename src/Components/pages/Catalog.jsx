import "../../App.css";

import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "./../../context/globalContext";
import ShowProducts from "./ShowProducts";

function Catalog() {
  const productCtx = useContext(AppContext);

  const { product, getProduct, success, setSuccess } = productCtx;
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <h2 className="page-subtitle">Nuestros Productos</h2>
      <p className="page-subtitle">
        Entre nuestras colecciones encontrarás desde los estilos tailandeses más
        tradicionales hasta los más modernos.
      </p>
      <div className="product-container" fluid="md">
        {product.lenght !== 0 ? (
          <ShowProducts products={product} isCatalog={true} />
        ) : null}
        {/* <ShowProducts products={product} isCatalog={true}/> */}
      </div>
    </>
  );
}

export default Catalog;
