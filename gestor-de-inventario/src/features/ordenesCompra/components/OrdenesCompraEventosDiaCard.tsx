
interface evento {
    titulo : string;
    descripcion : string;
    proveedor : string;
    nota : string;
    tipo : string
}
interface eventoProp {
    evento : evento
}


export default function OrdenesCompraEventosDiaCard({evento}: eventoProp){
    return(
        <article className={`rounded-md p-1 ${
            evento.tipo ==  "Orden creada" ?  "bg-blue-200" :
            evento.tipo == "Orden confirmada" ?  "bg-green-200" :
            evento.tipo == "Orden enviada" ? "bg-orange-200" : 
            evento.tipo == "Orden recibida" ? "bg-purple-200" : 
            evento.tipo == "Cancelación de orden" ? "bg-red-200" : "bg-gray-300"
        } border border-black`}>
            <div>
                <h1 className="font-semibold">{evento.titulo}</h1>
                <h1 className="ml-4">{evento.descripcion}</h1>
                <h1 className="ml-4 italic font-thin">{evento.nota}</h1>
            </div>
        </article>
    )
}