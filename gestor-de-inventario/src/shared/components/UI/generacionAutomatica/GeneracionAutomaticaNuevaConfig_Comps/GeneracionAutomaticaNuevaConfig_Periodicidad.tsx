    import React, { Dispatch, SetStateAction, useEffect, useState } from "react";


    interface props {
        setFechaInicial: Dispatch<SetStateAction<Date>>;
        setFechaFinal: Dispatch<SetStateAction<Date>>;
        setPeriodicidadDias: Dispatch<SetStateAction<number>>;
        loadFechaInicial: Date;
        loadFechaFinal: Date;
        loadPeriodicidadDias: number;
    }

    export default function GeneracionAutomaticaNuevaConfig_Periodicidad({...props}  : props) {
        

        
        const [periodicidadDias,setPeriodicidadDiasLocal] = useState<number>(1)
        const [fechaInicial,setFechaInicialLocal] = useState<Date>(new Date())
        const [fechaFinal,setFechaFinalLocal] = useState<Date>(new Date())



        const loadData = () =>{ //En caso de que abrieramos una card de una conf ya existente, su informacion se descargaria aqui
            if(props.loadFechaInicial && props.loadFechaFinal && props.loadPeriodicidadDias ){// Verifica que las props tengan informacion
                setPeriodicidadDiasLocal(props.loadPeriodicidadDias) //Aplica la data de los estados locales con la informacion que le llega
                setFechaInicialLocal(new Date(props.loadFechaInicial))
                setFechaFinalLocal(new Date(props.loadFechaFinal))
            }   
        }
        //useEffect() que se activara cuando existan cambios en los props
        
        useEffect(() => {
            loadData();
        }, [
            props.loadFechaInicial,
            props.loadFechaFinal,
            props.loadPeriodicidadDias,
        ]);

        useEffect(()=>{
            const _fechafinal = new Date(fechaInicial)
            _fechafinal.setDate(_fechafinal.getDate() + periodicidadDias)
            setFechaFinalLocal(_fechafinal)
            props.setFechaFinal(_fechafinal)
            props.setFechaInicial(fechaInicial)
        },[periodicidadDias])

        const [isDisabledInputDias,setIsDisabledInputDias] = useState<boolean>(true)
        
    
        const handlePeriodicidadInputChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
            const value = parseInt(e.target.value,10)
            if(!isNaN(value)){
                setPeriodicidadDiasLocal(value)
                props.setPeriodicidadDias(value)
                
            }else{
                setPeriodicidadDiasLocal(0)
                props.setPeriodicidadDias(0)
            }
        }
    
    return (
        <article className="flex gap-5  flex-col">
            <div className="flex gap-3 items-center">
                <h1 className="font-medium">Periodicidad : </h1>
                <input type="number" className="border border-black rounded-md p-1" placeholder={periodicidadDias.toString()} required onChange={handlePeriodicidadInputChange}/>
                <h1 className="font-medium">Dias</h1>
            </div>
            <div className="flex gap-3 items-center">
                <h2 className="font-medium">Fecha Inicial :</h2>
                <h1 className="border-black p-1 border rounded-md">{fechaInicial.getDate()}-{fechaInicial.getMonth()+1}-{fechaInicial.getFullYear()}</h1>
                <h2 className="font-medium">Fecha Final (Proxima generacion) :</h2>
                <h1 className="border-black p-1 border rounded-md">{fechaFinal.getDate()}-{fechaFinal.getMonth()+1}-{fechaFinal.getFullYear()}</h1>
            </div>
        </article>
    )
    }