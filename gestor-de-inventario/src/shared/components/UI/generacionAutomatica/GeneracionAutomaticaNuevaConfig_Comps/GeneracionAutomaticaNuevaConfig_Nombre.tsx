import React, { useEffect, useState } from "react";

interface props {
  setNombreConfiguracion: React.Dispatch<React.SetStateAction<string>>;
  loadNombre : string;
}



export default function GeneracionAutomaticaNuevaConfig_Nombre({...props} : props) {



  const [nombreConfiguracion,setNombreConfiguracion] = useState<string>("")
    

  const handleInputNombreChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    const nuevoNombre = e.target.value
    setNombreConfiguracion(nuevoNombre)
    props.setNombreConfiguracion(nuevoNombre)
  }

  useEffect(() =>{ //useEffect que se activara cada que detecte algo en la variable props.loadNombre
    if(props.loadNombre){
      setNombreConfiguracion(props.loadNombre)
      
    }else{
      setNombreConfiguracion("")
    }
  },[props.loadNombre])
  return (
    <article className="flex gap-3">
        <h1 className="font-medium">Nombre de la configuracion : </h1>
        <input type="text" className="p-1 border border-black rounded-md placeholder:italic bg-transparent" value={nombreConfiguracion} placeholder="Configuracion de Reportes Analiticos mensuales" maxLength={45} onChange={handleInputNombreChange}/>
    </article>
  )
}



