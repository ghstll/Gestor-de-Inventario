    import { useState } from "react";

    interface props{
    windowsConfig : WindowConfigProps;
    formData : FormDataProps
    }



    export interface WindowConfigProps { //Aqui le van a llegar todos los valores que tengan que ver que configuren el Componente, como el titulo de este y de que tipo de componete abrira, si 
                                                //sera uno para modificar una configuracion existente o abrir un componente para agregar una nueva configuracion
        titleWindow: string;
        children: React.ReactNode;
        tipo : number; //0 para nueva configuracion , 1 para modificar configuracion existente
        setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
        
        setActivo ? : React.Dispatch<React.SetStateAction<boolean>>
        fetchData: () => void;
    }

    export interface FormDataProps { //Aqui le van a llegar todos los valores para que sean enviados despues por el form
        id : number;
        nombreConfig: string;
        operacion: string;
        periodicidad_dias: number;
        activo : boolean,            
        fecha_inicial: Date;
        fecha_final: Date;
        formatos_salida: string[];
        destinatarios: string[];
    }

    


    export default function GeneracionAutomaticaConfiguracionWindow({windowsConfig,formData} : props) {
        const creado_en = new Date()
        const actualizado_en = new Date()
        
        const [isSaving,setIsSaving] = useState<boolean>(false)
        const validateForm = (nombreConfig: string, operacion: string, fecha_inicial?: Date, fecha_final?: Date, periodicidad_dias?: number, formatos_salida: string[] = [], destinatarios: string[] = []) => {
            // Add validation logic here
            return nombreConfig && operacion && formatos_salida.length > 0 && destinatarios.length > 0;
        }

        const handleClickChangeEstado = (e : React.FormEvent) =>{
            if (formData.activo) {
                desactivarConf(e);
            } else {
                activarConf(e);
            }
        }

        const [buttonEstadoText,setButtonEstadoText] = useState<string>(formData.activo ? "Desactivar" : "Activar")
        const saveConf= async (e : React.FormEvent) =>{
            e.preventDefault()

            const isValid = validateForm(
                formData.nombreConfig,
                formData.operacion ,
                formData.fecha_inicial ,
                formData.fecha_final ,
                formData.periodicidad_dias ,
                formData.formatos_salida ,
                formData.destinatarios 
            );

            if (!isValid) {
                alert("Por favor, complete todos los campos obligatorios y asegúrese de que los formatos de salida y destinatarios estén seleccionados.");
                return;
            }
            setIsSaving(true)
            
            try {   
                const response = await fetch("http://localhost:3001/api/confautoreportes/agregarconf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: formData.nombreConfig,
                    operacion: formData.operacion,
                    fecha_inicial: formData.fecha_inicial,
                    fecha_final: formData.fecha_final,
                    periodicidad_dias: formData.periodicidad_dias,
                    activo: true,
                    formatos_salida: formData.formatos_salida,
                    destinatarios: formData.destinatarios,
                    creado_en: creado_en,
                    actualizado_en: actualizado_en,
                })
                });

                if (!response.ok) {
                throw new Error("Error al guardar la configuración.");
                }
                await windowsConfig.fetchData()
                alert("Configuración guardada exitosamente.");
            } catch (error) {
                console.error(error);
                alert("Hubo un problema al guardar la configuración.");
            }finally{
                setIsSaving(false)
                windowsConfig.setIsOpenModal(false)
            }
        }

        const deleteConf= async (e : React.FormEvent) =>{
            e.preventDefault()

            setIsSaving(true)
            
            try {
                const response = await fetch("http://localhost:3001/api/confautoreportes/eliminarconf", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id : formData.id
                })
                });

                if (!response.ok) {
                throw new Error("Error al eliminar la configuración.");
                }
                await windowsConfig.fetchData()
                alert("Configuración eliminada exitosamente.");
            } catch (error) {
                console.error(error);
                alert("Hubo un problema al eliminar la configuración.");
            }finally{
                setIsSaving(false)
                windowsConfig.setIsOpenModal(false)
            }
        }

        const desactivarConf= async (e : React.FormEvent) =>{
            
            e.preventDefault()
            
           
            setIsSaving(true)
            
            try {
                const response = await fetch("http://localhost:3001/api/confautoreportes/estadoconf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    activo : false,
                    id : formData.id,
                    
                })
                });

                if (!response.ok) {
                throw new Error("Error al desactivar la configuración.");
                }
                windowsConfig.setActivo?.(false)
                await windowsConfig.fetchData()
                alert("Configuración desactivada exitosamente.");
                setButtonEstadoText("Activar")
            } catch (error) {
                console.error(error);
                alert("Hubo un problema al desactivar la configuración.");
            }finally{
                setIsSaving(false)
                windowsConfig.setIsOpenModal(false)
            }
        }

        const activarConf= async (e : React.FormEvent) =>{
           
            e.preventDefault()

            setIsSaving(true)
            
            try {
                const response = await fetch("http://localhost:3001/api/confautoreportes/estadoconf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    activo : true,
                    id : formData.id,
                    
                })
                });

                if (!response.ok) {
                throw new Error("Error al tratar de activar la configuración.");
                }
                windowsConfig.setActivo?.(true)

                await windowsConfig.fetchData()
                alert("Configuración activada exitosamente.");
                setButtonEstadoText("Desactivar")

            } catch (error) {
                console.error(error);
                alert("Hubo un problema al activar la configuración.");
            }finally{
                if(windowsConfig.setActivo){
                    windowsConfig.setActivo(true)
                }
                setIsSaving(false)
                windowsConfig.setIsOpenModal(false)
            }
        }



        return (
            <form className={`w-fit max-w-[80%] h-fit p-10 ${buttonEstadoText == "Desactivar" ? 'bg-black' : 'bg-black' } transition-all duration-700 rounded-md flex flex-col border text-white border-white gap-5 overflow-hidden`} onClick={(e) => e.stopPropagation()}
                onSubmit={saveConf}
            >
                
                <h1 className="font-bold text-2xl">{windowsConfig.titleWindow}</h1>
                { 
                    formData.nombreConfig ? (<h1 className="text-lg italic">{formData.nombreConfig}</h1>) : null  
                }           
                <hr className="border-none bg-white h-[1px]"/>
                <div className="flex flex-col gap-4">
                    {windowsConfig.children}
                </div>
                <div className={`w-full flex ${windowsConfig.tipo == 1 ? "justify-between" : "justify-end"} gap-4 font-normal`}>
                    { windowsConfig.tipo ==  1 ? <div className="flex gap-3">
                        <button className="border border-white rounded-md p-2 bg-gray-400 hover:brightness-125 duration-300" type="button" onClick={handleClickChangeEstado}>{buttonEstadoText}</button>
                        <button className="border border-white rounded-md p-2 bg-red-700 hover:brightness-125 duration-300" onClick={deleteConf}>Eliminar</button>
                    </div>: '' }
                    <div className="flex gap-3">
                        <button type="submit" className="border border-white rounded-md p-2 bg-green-600 hover:brightness-125 duration-300" disabled = {isSaving}>{windowsConfig.tipo == 1 ? "Guardar cambios" : "Agregar configuracion"}</button>
                        <button type="button" className="border border-white rounded-md p-2 bg-yellow-600 hover:brightness-125 duration-300">Cancelar</button>
                    </div>
                </div>
            </form>
        )
    }