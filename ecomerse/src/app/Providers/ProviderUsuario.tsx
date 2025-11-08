'use client'
import React, { useContext, useState } from 'react'
import {PlantillaReact} from '../Modelos/PlantillaReact'
import {usuarioContex} from '../Contexto/ContextUsuario'

export default function ProviderUsuario({children}:PlantillaReact) {

  const [nombreUsuario, setNombreUsuario]= useState<string>('')
  return (
    <usuarioContex.Provider value={{nombreUsuario,setNombreUsuario}}>
            {children}
    </usuarioContex.Provider>
  )
}


export const usuarioContext= ()=>{
    return useContext(usuarioContex)
}