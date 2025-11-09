import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'
import { useContextCarrito } from '../Providers/ProviderProducto'

export default function BtnEliminar({producto}:ProductoProp) {
  const { eliminarDelCarrito } = useContextCarrito();
 function eliminarProducto(){
    eliminarDelCarrito(producto.id);
 }


  return (
    <button className='btn btn-danger' onClick={eliminarProducto} >Eliminar Producto</button>
  )
}
