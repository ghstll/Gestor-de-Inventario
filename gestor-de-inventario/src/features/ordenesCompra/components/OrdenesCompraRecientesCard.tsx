
interface props {
    fecha : string,
    proveedor : string,
    estado : string,
    hora : string
}


export default function OrdenesCompraRecientesCard(props : props){
    return(
        <article className="bg-[#0a0a0a] min-w-full flex items-center justify-between p-2 rounded-md hover:brightness-150 duration-500">
            <div>
                <div className="flex gap-2">
                    <h1>{props.fecha}</h1>
                    <h1>{props.hora}</h1>
                </div>
                <h1 className="font-semibold">Proveedor : {props.proveedor}</h1>
            </div>
            <div className="whitespace-nowrap flex gap-2">
                <h1 className="whitespace-nowrap font-bold">Estado :</h1>
                <h1 className={`font-semibold ${
                    props.estado == "Pendiente" ? "text-blue-600" :
                    props.estado == "Completada" ?  "text-green-600" : 
                    props.estado == "Cancelada" ? "text-red-600" : null
                }`}>{props.estado}</h1>
            </div>
        </article>
    )
}