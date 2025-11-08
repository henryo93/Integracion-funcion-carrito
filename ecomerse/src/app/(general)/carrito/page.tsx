'use client'
import React from 'react'
import { useContextCarrito } from '../../Providers/ProviderProducto'
import Producto from '../../Componentes/Producto'
import BtnAgregar from '../../Componentes/BtnAgregar'
import BtnEliminar from '../../Componentes/BtnEliminar'

export default function page() {

  const { producto, productosCarrito } = useContextCarrito()
  return (
    <div className='container'>


      <div className='row'>
        <div className='col-md-8'>
          <div className='row'>

            {
              productosCarrito.map((item) => (
                 <div className='col-md-3'>
                  <Producto producto={item} key={item.id}></Producto>
                  <BtnEliminar producto={item}></BtnEliminar>
              </div>
              
              ))
            }

          </div>
        </div>

        <div className='col-md-4'>
          <div className='row'>
            {
              producto.map((item) => (
                <>
                 <Producto producto={item} key={item.id}></Producto>
                 <BtnAgregar producto={item}></BtnAgregar>
                </>
               
              ))
            }
          </div>
        </div>

      </div>



    </div>
  )
}
