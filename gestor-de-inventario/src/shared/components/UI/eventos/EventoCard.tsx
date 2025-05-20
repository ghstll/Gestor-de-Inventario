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
    evento : evento
    index : number
}

export default function EventoCard({evento,index} : props) {
    return (
        <section className={`text-white flex items-center gap-9 ${index % 2 === 0 ? "bg-green-900" : "bg-green-950"} p-1 rounded-md hover:brightness-200 duration-200` }>
            <div className="border-r-2 p-5">
                <h1 className="font-bold">{evento.fecha_evento}</h1>
            </div>
            <div>
                <h1>{evento.fecha_evento}</h1>
                <div className="flex gap-3">
                    <h1 className="font-bold">Tipo de evento : </h1>
                    <h1 className="italic"> {evento.tipo_evento}</h1>
                </div>
            </div>
        </section>
    )
}