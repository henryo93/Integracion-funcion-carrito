'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Producto } from '../Modelos/Producto'
import {contexCarrito} from '../Contexto/ContexCarrito'
import { CarritoItem } from '../Modelos/CarritoItem';

//1. children
//2. definir la funcionalid de los metodos 
//3. exportar esas funcionales
export default function ProviderProducto({ children }: PlantillaReact) {


    let urlApi="http://localhost:5000/producto"
    let urlApiCarrito = "http://localhost:5000/carrito"
    const [producto, setProducto] = useState<Producto[]>([]);
    const [productosCarrito, setProductosCarrito]= useState<CarritoItem[]>([]);


    //fetch, axios, ajax 

    async function cargarProducto(){

        try {
            const resp= await fetch(urlApi);
            const data= await resp.json()
            setProducto(data)

            console.log(producto)


        } catch (error) {
            console.log('ocurrio un error al invocar el sevicio')
        }
    }


    async function  guardarProducto (producto:Producto) {

        try {
            
            const respuspuesta= await fetch(urlApi,{
                method:'POST',
                headers:{
                    "content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            })

            const resultado= await respuspuesta.json()

            alert('Producto agregado correctamente')

            cargarProducto();

        } catch (error) {
            alert('Ocurrio un error' + error)
        }
        
    }


    async function eliminarProdoucto(idProducto:number){

        try {

               const respuspuesta= await fetch(urlApi+"/"+idProducto,{
                method:'DELETE',
                headers:{
                    "content-Type": "application/json"
                }
            })

            const resultado= await respuspuesta.json()

            alert('Producto Eliminado correctamente')

            cargarProducto();
            

        } catch (error) {
            alert("Ocurrio un error")
        }

    }


     async function  actualizarProducto (producto:Producto) {

        try {
            
            const respuspuesta= await fetch(urlApi+'/'+producto.id,{
                method:'PUT',
                headers:{
                    "content-Type": "application/json"
                },
                body: JSON.stringify(producto)
            })

            const resultado= await respuspuesta.json()

            alert('Producto Actualizado correctamente')

            cargarProducto();

        } catch (error) {
            alert('Ocurrio un error' + error)
        }
        
    }

    async function cargarCarrito() {
        try {
            const resp = await fetch(urlApiCarrito);
            const data = await resp.json();
            setProductosCarrito(data);
        } catch (error) {
            console.log('Error al cargar el carrito:', error);
        }
    }

    async function agregarCarrito(producto: Producto) {
        try {
            const response = await fetch(urlApiCarrito, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ idProducto: producto.id })
            });
          
            if (response.ok) {
                alert('Producto agregado al carrito');
                cargarCarrito(); // Refresh cart items
            } else {
                alert('Producto ya está en el carrito');
            }
        } catch (error) {
            alert('Error al agregar al carrito: ' + error);
        }
    }

    async function eliminarDelCarrito(idCarrito: number) {
        try {
            const response = await fetch(`${urlApiCarrito}/${idCarrito}`, {
                method: 'DELETE',
            });
            
            if (response.ok) {
                alert('Producto eliminado del carrito');
                cargarCarrito(); // Refresh cart items
            } else {
                alert('Error al eliminar del carrito');
            }
        } catch (error) {
            alert('Error al eliminar del carrito: ' + error);
        }
    }


    useEffect(() => {
        cargarProducto();
        cargarCarrito();            
    }, []);


    useEffect(()=>{
        console.log(producto)
    },[producto])

  


    return (
        <contexCarrito.Provider value={{
            producto,
            productosCarrito,
            agregarCarrito,
            eliminarDelCarrito,
            cargarCarrito,
            guardarProducto,
            eliminarProdoucto,
            actualizarProducto
        }}>
            {children}
        </contexCarrito.Provider>
    )
}

export function useContextCarrito(){
    return useContext(contexCarrito)
}