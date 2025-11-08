'use client'
import Image from "next/image";
import Link from "next/link";
import { usuarioContext } from "./Providers/ProviderUsuario";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {


  const [correo,setCorreo]= useState<string>('')
  const [clave, setClave]=useState<string>('')
  const router= useRouter()

  const {nombreUsuario,setNombreUsuario} =usuarioContext();

  function iniciarSesion(){
      if(correo==='' || clave==='' || correo===null  || clave===null){
        alert('Debe ingresar credenciales')
        return
      }
      
      setNombreUsuario(correo);
      router.push('/productos')


  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="container">

          <form className="form-control">
            <h1>Inicio de sesion</h1>

            <input className="form-control" 
                placeholder="ingrese su correo" 
                type="email" 
                value={correo}
                onChange={(e)=>setCorreo(e.target.value)}
            
            ></input> <br />
            <input type="password" 
                className="form-control"
                 placeholder="ingrese su contrasena"
                 value={clave}
                 onChange={(e)=> setClave(e.target.value)}
                 /> <br />


            <button  className="btn btn-info" onClick={iniciarSesion} type="button">Iniciar sesion</button>

          </form>

        </div>

      </main>
    </div>
  );
}
