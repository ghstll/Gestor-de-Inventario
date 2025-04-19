export default function NotificacionesCard({title,description,date,icon,time,notificationType} : {title : string , description : string , date : string , icon  : string , time? : string , notificationType : string}){
    
    const getColor = ()=>{
        if(notificationType == "Producto agotado"  ){
            return "text-[#DC2626]"
        }
        if(notificationType == "Stock bajo"){
            return "text-[#F97316]"
        }
        if(notificationType == "Reporte generado"){
            return "text-[#3B82F6]"
        }
        if(notificationType == "Sugerencia"){
            return "text-[#22C55E]"
        }
        if(notificationType == "Vencimiento"){
            return "text-[#8B5CF6]"
        }
        return "text-gray-600"
    }
    
    
    return(
        <article className="border border-black rounded-sm h-[100px] w-full p-3">
            <div className="flex items-center gap-4">
                <div className="rounded-full border border-black p-2">
                    <img src={icon} alt="" width={40} height={40} />
                </div>
                <div>
                        <div className="flex">
                            <div className={`font-bold ${getColor()}`}>
                                {title}
                            </div>
                            {/* <div>
                                {time}
                            </div> */}
                        </div>
                        <div>
                            {description}
                        </div>
                </div>
                <button className="border border-black rounded-md whitespace-nowrap p-1">Mas detalles</button>
            </div>
        </article>
    )   
}