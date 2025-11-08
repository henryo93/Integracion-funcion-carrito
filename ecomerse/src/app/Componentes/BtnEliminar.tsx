import React from 'react'
import { ProductoProp } from '../Modelos/ProductoProp'

export default function BtnEliminar({producto}:ProductoProp) {

 function eliminarProducto(){
    alert('producto eliminado')
 }


  return (
    <button className='btn btn-danger' onClick={eliminarProducto} >Eliminar Producto</button>
  )
}
