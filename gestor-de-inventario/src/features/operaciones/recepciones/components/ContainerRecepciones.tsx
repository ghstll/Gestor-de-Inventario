import RecepcionCard from "./RecepcionCard"
interface recepcion{
    folio_recepcion : string
    fecha_esperada_entrega : string
    estado : string
    observaciones : string
    cantidad : 50
}
interface props{
    title: string
    data : recepcion[]
}
export default function ContainerRecepciones({title,data} : props) {
    return (
        <article className="flex flex-1 flex-col gap-3 min-w-[300px] max-h-[400px] items-center p-2 rounded-md  bg-[#1a1b22] text-white duration-700 hover:brightness-125 overflow-y-auto scrollbarclass">
            <h1 className="font-bold">{title}</h1>
            {
                data.length > 0 ?
                data.map((recepcion)=>{
                    return(
                        <RecepcionCard
                            folio_recepcion={recepcion.folio_recepcion}
                            fecha_esperada_entrega={recepcion.fecha_esperada_entrega}
                            estado = {recepcion.estado}
                            observaciones= {recepcion.observaciones}
                            cantidad ={recepcion.cantidad}
                        >
                        </RecepcionCard>
                    )
                }) : <h1 className="text-white font-bold">No se ha encontrado informacion</h1>
            }
        </article>
    )
}