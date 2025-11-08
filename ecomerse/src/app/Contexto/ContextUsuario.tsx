import { createContext } from "react";

export const usuarioContex= createContext({
    nombreUsuario:'',
    setNombreUsuario: (nomre:string)=>{}
})