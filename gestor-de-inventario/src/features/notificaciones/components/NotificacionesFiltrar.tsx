interface props{
    setFiltrarPorArea : React.Dispatch<React.SetStateAction<string>>;
    setFiltrarPorRangoFecha : React.Dispatch<React.SetStateAction<string>>;
    setOrdenarPorFecha : React.Dispatch<React.SetStateAction<string>>;

}
import { useEffect, useState } from "react";
export default function NotificacionesFiltrar({...props} : props) {

    const areas = [
        "Todas",
        "Operaciones",
        "Ventas",
        "Kardex",
        "Inventario físico",
        "Polizas",
        "Reportes",
        "Preferencias",
      ];
      
    const rangoFechas = [
        "Todas las fechas",
        "Hoy",
        "Ayer",
        "Ultimos 7 dias",
        "Este mes",
    ]

    const [masRecientesSelected,setMasRecientesSelected] = useState<boolean>(true)
    const [masAntiguasSelected,setMasAntiguasSelected] = useState<boolean>(false)

    const [areaSeleccionada, setAreaSeleccionada] = useState<string>("Todas")
    const [rangoDeFechas,setRangoDeFechas] = useState<string>("Todas las fechas")
    
    useEffect(()=>{
        if(masRecientesSelected){
            props.setOrdenarPorFecha("Mas recientes")
        }else{
            props.setOrdenarPorFecha("Mas antiguas")
        }
    },[masRecientesSelected,masAntiguasSelected])

    useEffect(()=>{
        props.setFiltrarPorArea(areaSeleccionada)
        props.setFiltrarPorRangoFecha(rangoDeFechas)
    },[areaSeleccionada,rangoDeFechas])
    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="font-bold">Filtrar por rango de fecha</h1>
                <div className="rounded-md bg-[#23242e] w-fit p-2 gap-2 flex font-medium ">
                    {rangoFechas.map((rangoFecha) => {
                        return (<button 
                            key={rangoFecha} 
                            className={`${rangoDeFechas === rangoFecha ? "bg-gray-700" : " "} text-white p-[6px] rounded-lg transition-all duration-200`}
                            onClick={() => setRangoDeFechas(rangoFecha)}
                        >{rangoFecha}</button>)
                    })}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="font-bold">Ordenar por fecha</h1>
                <div className="rounded-md bg-[#23242e] w-fit p-2 gap-2 flex font-medium ">
                    {areas.map((area) => {
                        return (<button 
                            key={area} 
                            className={`${areaSeleccionada === area ? "bg-gray-700" : " "} text-white p-[6px] rounded-lg transition-all duration-200`}
                            onClick={() => setAreaSeleccionada(area)}
                        >{area}</button>)
                    })}
                </div>
            </div>
            <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="font-bold">Ordenar por fecha</h1>
                <div className="rounded-md bg-[#23242e] w-fit p-2 gap-2 flex font-medium ">
                    <button className={`${masRecientesSelected ? "bg-gray-700"  : ""} p-[4px] transition-all rounded-lg duration-300`} onClick={() => {setMasRecientesSelected(!masRecientesSelected); setMasAntiguasSelected(!masAntiguasSelected)}}>Mas recientes</button>
                    <button className={`${masAntiguasSelected ? "bg-gray-700"  : ""} p-[4px] transition-all  rounded-lg duration-300`} onClick={() => {setMasAntiguasSelected(!masAntiguasSelected);setMasRecientesSelected(!masRecientesSelected) }}>Mas antiguos</button>
                </div>
            </div>
        </section>
    )
}