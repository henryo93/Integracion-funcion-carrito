'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { Producto } from '../Modelos/Producto'
import {contexCarrito} from '../Contexto/ContexCarrito'


//1. children
//2. definir la funcionalid de los metodos 
//3. exportar esas funcionales
export default function ProviderProducto({ children }: PlantillaReact) {


    let urlApi="http://localhost:5000/producto"
    const [producto, setProducto] = useState<Producto[]>([]);
    const [productosCarrito, setProductosCarrito]= useState<Producto[]>([]);


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


    useEffect(() => {
        cargarProducto();

    }, []);


    useEffect(()=>{
        console.log(producto)
    },[producto])

    function agregarCarrito(producto:Producto){
        alert('Producto agregado al carrito');
        setProductosCarrito([...productosCarrito,producto]);
    }


    return (
        <contexCarrito.Provider value={{producto,productosCarrito,agregarCarrito,guardarProducto,eliminarProdoucto,actualizarProducto}}>
            {children}
        </contexCarrito.Provider>
    )
}

export function useContextCarrito(){
    return useContext(contexCarrito)
}