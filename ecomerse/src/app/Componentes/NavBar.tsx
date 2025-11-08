'use client'
import Link from 'next/link'
import React from 'react'
import { useContextCarrito } from '../Providers/ProviderProducto'
import { usuarioContext } from '../Providers/ProviderUsuario';

export default function NavBar() {

    const {productosCarrito}=useContextCarrito();
    const {nombreUsuario}= usuarioContext()

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda de productos</a>
                   
                        <div className="navbar-nav">
                            <p className="nav-link active">Usuario Conectado: {nombreUsuario}</p>
                            <Link href='/productos' className="nav-link active" aria-current="page">Home</Link>
                            <Link className="nav-link" href="/productos">Productos</Link>
                            <Link className="nav-link" href="/carrito">
                                Carrito
                                <button type='button' className='btn btn-warning btn-sm'><span className='badge badge-secondary'>{productosCarrito.length}</span></button> 
                            </Link>
                             <Link className="nav-link" href='/mantenimiento-producto'>Mantenimiento Producto</Link>
                            <Link className="nav-link" href='./'>Cerrar Sesion</Link>
                        </div>
                </div>
            </nav>
        </>
    )
}
