import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

//lista producto
//listar prodcutos carrito
//agregarcarrito

export const contexCarrito= createContext({
    producto: [] as Producto[],
    productosCarrito: [] as Producto[],
    agregarCarrito: (producto : Producto)=>{},
    guardarProducto: (producto: Producto)=>{},
    eliminarProdoucto:(idProducto:number)=>{},
    actualizarProducto :(producto:Producto)=>{}

})