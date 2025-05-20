import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import NotificacionesCard from "../../notificaciones/components/NotificacionesCard";


// Functions
import { getAllNotificaciones } from "../../../backend/routes/api/functions/notificaciones/functions_notificaciones";

import { useEffect, useState } from "react";
import NotificacionesFiltrar from "../components/NotificacionesFiltrar";

interface notificacion{
    id : number;
    tipo : string;
    mensaje : string;
    fecha : string;
    hora : string;
    urgente : boolean;
    visto : boolean;
    area : string;
}



export default function NotificacionesPage(){

    const [dataNotificaciones,setDataNotificaciones] = useState<notificacion[]>([])
    const [dataNotificacionesVisibles,setDataNotificacionesVisibles] = useState<notificacion[]>([])

    
    const [filtrarPorArea,setFiltrarPorArea] = useState<string>("Todas")
    const [filtrarPorRangoFecha,setFiltrarPorRangoFecha] = useState<string>("")
    const [ordenarPorFecha,setOrdenarPorFecha] = useState<string>("")
    const sortDataBy = () =>{
        let sortedData = [...dataNotificaciones]
        if(ordenarPorFecha == "Mas recientes"){
            sortedData.sort((a,b) =>{
                const fechaA = new Date(a.fecha).getTime()
                const fechaB = new Date(b.fecha).getTime()
                return fechaB - fechaA
            })
        }   
        if(ordenarPorFecha == "Mas antiguas"){
            sortedData.sort((a,b) =>{
                const fechaA = new Date(a.fecha).getTime()
                const fechaB = new Date(b.fecha).getTime()
                return fechaA - fechaB
            })
        }
        
        if(filtrarPorArea && filtrarPorArea !== "Todas"){
            sortedData = sortedData.filter((notificacion) => notificacion.area === filtrarPorArea.toLowerCase())
        }
        setDataNotificacionesVisibles(sortedData)
    }
    
    useEffect(()=>{
        loadNotificaciones()
    },[])

    const loadNotificaciones = async () =>{
        const data = await getAllNotificaciones()
        setDataNotificacionesVisibles(data)
        setDataNotificaciones(data)
    }
    
    useEffect(()=>{
        sortDataBy()
    },[ordenarPorFecha,filtrarPorArea])

    const colorsCards: { [key: string]: string } = {
        operaciones: "#3B82F6",         // Azul vibrante
        ventas: "#22C55E",              // Verde brillante
        kardex: "#A855F7",              // Violeta claro
        "inventario fisico": "#FBBF24", // Amarillo ámbar vivo
        polizas: "#EF4444",             // Rojo fuerte
        reportes: "#0EA5E9",            // Celeste intenso
        preferencias: "#EC4899",        // Rosa vibrante
      };

      console.log(dataNotificaciones)
    return(
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="w-full h-full flex justify-center p-4 bg-[#141519]">
                <section className="rounded-md w-full p-4 overflow-y-auto text-white scrollbarclass flex flex-col gap-4">
                        <h1 className="font-bold italic text-2xl mt-3 ml-3">Notificaciones</h1>
                        <div className="w-full flex flex-col gap-4 justify-center items-center">
                            <hr className="w-full border-none h-[1px] bg-white"/>
                            <NotificacionesFiltrar setFiltrarPorArea={setFiltrarPorArea} 
                                                   setFiltrarPorRangoFecha={setFiltrarPorRangoFecha}
                                                   setOrdenarPorFecha={setOrdenarPorFecha}
                            ></NotificacionesFiltrar>
                            <hr className="w-[90%] border-none h-[1px] bg-white"/>
                            {
                                dataNotificacionesVisibles.length >     0 ?  dataNotificacionesVisibles.map((notificacion)=>{
                                    return  <NotificacionesCard
                                                 tipo={notificacion.tipo}
                                                 id={notificacion.id}
                                                    fecha={notificacion.fecha}
                                                 hora={notificacion.hora}
                                                 mensaje={notificacion.mensaje}
                                                 urgente={notificacion.urgente}
                                                 visto={notificacion.visto}
                                                 color={colorsCards[notificacion.area]}
                                                 >
                                             </NotificacionesCard>
                             }) : 
                                <h1 className="text-white text-center font-bold">No hay notificaciones</h1>
                            }
                        </div>
                </section>
            </main>
        </div>
    )
}


