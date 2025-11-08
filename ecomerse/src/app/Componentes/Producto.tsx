import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'

export default function Producto({producto}: ProductoProp) {
  return (

              <div className='card' >
                <div className='card-header'>
                  {producto.nombreProducto}
                </div>
                <div className='card-body'>

                  <img src={producto.imgProducto} alt="" className='img-thumbnail' style={{height:'150px'}}/>
                  Precio Producto: {producto.precioProducto} <br />
                  ISV: {producto.isvProducto}

                </div>
              </div>
  )
}
