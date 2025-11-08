'use client'
import React from 'react'
import NavBar from '../../Componentes/NavBar'
import { useContextCarrito } from '../../Providers/ProviderProducto'
import Producto from '../../Componentes/Producto'
import BtnAgregar from '../../Componentes/BtnAgregar'

export default function page() {

  const { producto ,agregarCarrito} = useContextCarrito()
  return (

    <div className='container'>
      <div className='row'>
        { 
          producto.map((item) => (           
            <div className="col-md-3" key={item.id}>
             <Producto producto={item} ></Producto>
             <BtnAgregar producto={item}></BtnAgregar>
             </div>
          
          ))
        }
      </div>

    </div>

  )
}
