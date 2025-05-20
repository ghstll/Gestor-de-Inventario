import React, { useState } from "react";
import ProveedorAgregarCard from "./ProveedorAgregarCard";
import ToastProveedor from "./ToastProveedor";
interface proveedor_proximo_agregar{
    nombre : string;
    contacto : string;
    telefono : string;
    email : string;
    direccion : string
}



export default function ProveedorAgregar(){

    const [toastStageMessage,setToastStageMessage] = useState<string | null>(null)
    const [toastProveedoresEnviados,setToastProveedoresEnviados] = useState<string | null>(null)
    const [toastErrorValidacion,setToastErrorValidacion] = useState<string | null>(null)
    const [toastErrorEnviarProveedores,setToastErrorEnviarProveedores] = useState<string | null>(null)

    const [nuevoProveedor, setNuevoProveedor] = useState<proveedor_proximo_agregar>({
        nombre: '',
        contacto: '',
        telefono: '',
        email: '',
        direccion: ''
        });
        
        

    
    const [proveedoresProximosAgregar,setProveedoresProximosAgregar] = useState<proveedor_proximo_agregar[]>([])

    const handleChangeInputs = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value }  = e.target
        setNuevoProveedor(prev => ({...prev,[name] : value}))
    }

    const agregarAStage = () =>{
        if (!nuevoProveedor.nombre || !nuevoProveedor.email || !nuevoProveedor.telefono) {
            setToastErrorValidacion("Por favor, completa los campos obligatorios: nombre, email y teléfono.");
            return; // Detener la función si faltan campos
        }
        
        setProveedoresProximosAgregar(prev => [...prev,nuevoProveedor])
        setNuevoProveedor({nombre : "" , contacto : "" , direccion : "" ,email : "" , telefono : ""})
        setToastStageMessage("Proveedor agregado a la zona de stage")
    }





    const addProveedores = async ()=> {
        if(proveedoresProximosAgregar.length === 0){
            return setToastErrorEnviarProveedores("No hay ningun proveedor en el apartado de Stage")
        }
        try {
            const response = await fetch("http://localhost:3001/api/proveedores/agregarproveedores",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(
                  proveedoresProximosAgregar
                )
            })

            if(!response.ok){
                throw new Error("Error al agregar los proveedores")
            }
            setNuevoProveedor({nombre : "" , contacto : "" , direccion : "" ,email : "" , telefono : ""})
            setToastProveedoresEnviados("Proveedores guardados exitosamente")
            setProveedoresProximosAgregar([])
        } catch (error) {
            console.error(error)
            alert("Hubo un problema al tratar de agregar los nuevos proveedores")
        }
    }

  return (
    <section className="w-[50%] h-[90%] border border-white bg-black rounded-md p-3 flex items-center  flex-col gap-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col w-full h-fit p-2 gap-3">
                <div className="text-white flex flex-col gap-2">
                    <label htmlFor="input_nombreproveedor">Nombre del Proveedor</label>
                    <input type="text" id="input_nombreproveedor" onChange={handleChangeInputs} name="nombre" value={nuevoProveedor.nombre} placeholder="Ej. Bimbo" className="bg-black p-1  border border-white rounded-md" />
                </div>
                <div className="text-white flex flex-col gap-2">
                    <label htmlFor="input_contactoproveedor">Contacto del Proveedor</label>
                    <input type="text" id="input_contactoproveedor"  onChange={handleChangeInputs} name="contacto" value={nuevoProveedor.contacto} placeholder="Ej. Carlos Martinez" className="bg-black p-1  border border-white rounded-md" />
                </div>
                <div className="text-white flex flex-col gap-2">
                    <label htmlFor="input_telefonoproveedor">Numero de telefono del Proveedor</label>
                    <div className="flex gap-2 items-center">
                        <p>+52</p>
                        <input type="tel" name="telefono" id="input_telefonoproveedor"  onChange={handleChangeInputs} value={nuevoProveedor.telefono} className="bg-black border border-white rounded-md w-[40%]" />
                    </div>
                </div>
                <div className="text-white flex flex-col gap-2">
                    <label htmlFor="input_emailproveedor">Email del Contacto del Proveedor</label>
                    <input type="email" id="input_emailproveedor"  onChange={handleChangeInputs} name="email" value={nuevoProveedor.email} placeholder="Ej. jose.gonzalez@bimbo.com" className="bg-black p-1  border border-white rounded-md" />
                </div>
                <div className="text-white flex flex-col gap-2">
                    <label htmlFor="input_direccionproveedor">Direccion del Proveedor</label>
                    <input type="text" id="input_direccionproveedor" onChange={handleChangeInputs} name="direccion" value={nuevoProveedor.direccion} placeholder="Ej. jose.gonzalez@bimbo.com" className="bg-black p-1  border border-white rounded-md" />
                </div>
            </div>
            <div className="flex w-full justify-end mr-10">
                <button className="border border-white rounded-md p-1 text-white bg-blue-800 hover:brightness-125 duration-500" onClick={agregarAStage}>Agregar a la zona de Stage</button>
            </div>
            <hr  className="border-none bg-white  h-[1px] w-full"/>
            <div className="border border-white w-full flex flex-col items-center p-3 rounded-md overflow-y-auto gap-3 scrollbarclass">
                {
                    proveedoresProximosAgregar.length === 0 ? 
                    <h1 className="text-white">No haz preparado ningun proveedor para añadir</h1> : 
                    proveedoresProximosAgregar.map((proveedor) =>{
                        return(
                            <ProveedorAgregarCard
                                nombre={proveedor.nombre}
                                contacto={proveedor.contacto}
                                direccion={proveedor.direccion}
                                email={proveedor.email}
                                telefono={proveedor.telefono}
                            ></ProveedorAgregarCard>
                        )
                    })
                }
            </div>
            <div className="flex w-full justify-end mr-10">
                <button className="border border-white rounded-md p-1 text-white bg-green-700 hover:brightness-125 duration-500" onClick={addProveedores}>Agregar proveedores</button>
            </div>
            {
                toastStageMessage && <ToastProveedor message={toastStageMessage} tipo="agregadosstage" onClose={() => setToastStageMessage(null)}></ToastProveedor>
        
            }
             {
                toastProveedoresEnviados && <ToastProveedor message={toastProveedoresEnviados} tipo="provenviados" onClose={() => setToastProveedoresEnviados(null)}></ToastProveedor>
        
            }
             {
                toastErrorValidacion && <ToastProveedor message={toastErrorValidacion} tipo="error_validacion" onClose={() => setToastErrorValidacion(null)}></ToastProveedor>
        
            }
              {
                toastErrorEnviarProveedores && <ToastProveedor message={toastErrorEnviarProveedores} tipo="error_array_vacio" onClose={() => setToastErrorEnviarProveedores(null)}></ToastProveedor>
        
            }
    </section>
  
  )
}