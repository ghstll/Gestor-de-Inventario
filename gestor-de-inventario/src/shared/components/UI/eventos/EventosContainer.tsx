import EventoCard from "./EventoCard"

  interface evento{
            id : string
            id_orden_compra  : number
            fecha_evento : string
            tipo_evento : string
            usuario : string
            observaciones : string
            creado_en :string            
        }
interface props{
    data  : evento[]
    title : string
}
export default function EventosContainer({data,title} : props) {
    return (
        <section className="w-full h-fit rounded-md p-2 flex flex-col gap-3 bg-[#1a1b22] max-h-[500px] overflow-y-auto scrollbarclass">
            <h1 className="font-bold text-white text-center">{title}</h1>
            {
              data.map((evento,index)=>{
                return(
                    <EventoCard evento={evento} index={index}></EventoCard>
                )
              })
            }
        </section>
    )
}