interface props {
    id : number;
    tipo : string;
    mensaje : string;
    fecha : string;
    hora : string;
    urgente : boolean;
    visto : boolean;
    color : string;
}
import NotificacionIcon from '../../../shared/assets/icons/notifications_icons/default.svg';
export default function NotificacionesCard({...notificacion} : props){

    const fecha = new Date(notificacion.fecha)
    const day = fecha.getDate()
    const month = fecha.getMonth() + 1
    const year = fecha.getFullYear()

    return(
        <article className="border border-white rounded-md h-fit  w-[80%] p-3 cursor-pointer hover:scale-[1.01] hover:brightness-125 duration-500 flex items-center" style={{backgroundColor : notificacion.color}}>
            <div className="flex justify-between gap-4 w-full">
                <div className="rounded-full border border-black p-2">
                    <img src={NotificacionIcon} alt="" width={30} height={30} />
                </div>
                <div>
                    <h1>{day} - {month} - {year}</h1>
                    <div className='flex gap-3'>
                        <h1 className='font-bold'>Tipo de notificacion : </h1>
                        <h1>{notificacion.tipo}</h1>
                    </div>
                </div>
                <div>
                    <h1>{notificacion.mensaje}</h1>
                </div>
            </div>  
        </article>
    )
}