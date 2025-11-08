import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'
import { useContextCarrito } from '../Providers/ProviderProducto'

export default function BtnAgregar({producto}:ProductoProp) {

    const {agregarCarrito}=useContextCarrito()
  return (
      <button type='button' onClick={()=>agregarCarrito(producto)} className='btn btn-success'>Agregar al carrito</button>

  )
}
