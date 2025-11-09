import { createContext } from "react";
import { Producto } from "../Modelos/Producto";
import { CarritoItem } from "../Modelos/CarritoItem";
//lista producto
//listar prodcutos carrito
//agregarcarrito

export const contexCarrito= createContext({
    producto: [] as Producto[],
    productosCarrito: [] as CarritoItem[],
    agregarCarrito: (producto : Producto)=>{},
    guardarProducto: (producto: Producto)=>{},
    eliminarProdoucto:(idProducto:number)=>{},
    actualizarProducto :(producto:Producto)=>{},
    eliminarDelCarrito: (idCarrito: number) => {},
    cargarCarrito: () => {},

})