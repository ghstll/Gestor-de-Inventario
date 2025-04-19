import notificacionesData from "../../../../../data/json_files/notifications_data.json";
import AsideMenu from "../../../AsideMenu/AsideMenu";
import NotificacionesCard from "../../../SistemaComps/NotificacionesComps/NotificacionesCard";


import reporteGeneradoIcon from "../../../../../assets/notifications_icons/reporte_generado.svg";

import stockBajoIcon from "../../../../../assets/notifications_icons/stock_bajo.svg";

import defaultNotificationIcon from "../../../../../assets/notifications_icons/default.svg";
import sugerenciaIcon from "../../../../../assets/notifications_icons/sugerencia.svg";
import vencimientoIcon from "../../../../../assets/notifications_icons/vencimiento.svg";



const getIcon  = (tipoNotificacion : string) =>{
    if(tipoNotificacion == "Stock bajo"){
        return stockBajoIcon
    }
    if(tipoNotificacion == "Reporte generado"){
        return reporteGeneradoIcon
    }
    if(tipoNotificacion == "Sugerencia"){
        return sugerenciaIcon
    }
    if(tipoNotificacion == "Vencimiento"){
        return vencimientoIcon
    }



    return defaultNotificationIcon
}

export default function NotificaionesPage(){
    

    return(
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="w-full h-full flex justify-center p-4">
                <section className="border border-black rounded-md w-[70%]">
                        <h1 className="font-bold italic text-2xl mt-3 ml-3">Notificaciones</h1>
                        <div className="w-full flex flex-col gap-4 justify-center">
                            <hr />
                            {
                                notificacionesData.notificaciones.map((notificacion)=>{
                                       return  <NotificacionesCard
                                                    title={notificacion.titulo}
                                                    description={notificacion.mensaje}
                                                    date={notificacion.fecha}
                                                    icon={getIcon(notificacion.tipo)}
                                                    notificationType={notificacion.tipo}
                                                    >
                                                </NotificacionesCard>

                                })
                            }
                        </div>
                </section>
            </main>
        </div>
    )
}