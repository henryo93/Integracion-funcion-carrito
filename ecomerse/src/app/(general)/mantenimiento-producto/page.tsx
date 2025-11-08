'use client'
import { Producto } from '@/app/Modelos/Producto';
import { useContextCarrito } from '@/app/Providers/ProviderProducto'
import React, { useState } from 'react'

export default function page() {


    const { guardarProducto, producto, eliminarProdoucto, actualizarProducto } = useContextCarrito();



    const [idProducto, setIdProducto] = useState<number>(0)
    const [nombreProdouco, setNombreProducto] = useState<string>('')
    const [precioProdouco, setPrecioProducto] = useState<string>('')
    const [isvProdouco, setIsvProducto] = useState<string>('')
    const [urlProdouco, setUrlProducto] = useState<string>('');
    const [accion,setAccion]=useState<number>(0)



    function agregarProducto() {

        //llamar el metodo actualizar

        if (accion == 2) {

            let producto: Producto = {
                id: idProducto,
                nombreProducto: nombreProdouco,
                precioProducto: parseFloat(precioProdouco),
                isvProducto: parseFloat(isvProdouco),
                imgProducto: urlProdouco
            }

            actualizarProducto(producto)

        }

        //llamar el metodo guardar
        else {

            let producto: Producto = {
                id: 0,
                nombreProducto: nombreProdouco,
                precioProducto: parseFloat(precioProdouco),
                isvProducto: parseFloat(isvProdouco),
                imgProducto: urlProdouco
            }

            guardarProducto(producto)
        }

        setAccion(0);

        setIdProducto(0)
        setNombreProducto("")
        setIsvProducto("")
        setUrlProducto("")
        setUrlProducto("")
        setPrecioProducto("")

    }


    function asignarProducto(item: Producto) {

        setAccion(2);

        setIdProducto(item.id)
        setNombreProducto(item.nombreProducto)
        setPrecioProducto(item.precioProducto.toString())
        setIsvProducto(item.isvProducto.toString())
        setUrlProducto(item.imgProducto)

    }

    return (
        <div className='container'>
            <br />

            <form className='form' action="">

                <input type="text" className='form-control' placeholder='Ingrese nombre del producto'
                    value={nombreProdouco}
                    onChange={(e) => setNombreProducto(e.target.value)}
                /> <br />

                <input type="text" name="" id="" className='form-control' placeholder='Ingrese precio del producto'
                    value={precioProdouco}
                    onChange={(e) => setPrecioProducto(e.target.value)}
                /> <br />

                <input type="text" name="" id="" className='form-control' placeholder='Ingrese URL producto'
                    value={urlProdouco}
                    onChange={(e) => setUrlProducto(e.target.value)}
                /> <br />

                <input type="text" name="" id="" className='form-control' placeholder='Ingrese ISV producto'
                    value={isvProdouco}
                    onChange={(e) => setIsvProducto(e.target.value)}
                /> <br />

                <button type='button' className='btn btn-success' onClick={agregarProducto}>Guardar Producto</button>



            </form> <br />


            <table className='table'>

                <thead>
                    <th>Id Producto</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Isv</th>
                    <th>Eliminar</th>
                    <th>Editar</th>
                </thead>

                <tbody>
                    {
                        producto.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombreProducto}</td>
                                <td>{item.precioProducto}</td>
                                <td>{item.imgProducto}</td>
                                <td>{item.isvProducto}</td>
                                <td><button type='button' className='btn btn-danger btn-sm' onClick={() => eliminarProdoucto(item.id)}>Eliminar</button></td>
                                <td><button type='button' className='btn btn-warning btn-sm' onClick={() => asignarProducto(item)}>Editar</button></td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
