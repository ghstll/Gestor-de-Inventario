import OrdenesCompraEventosDiaCard from "./OrdenesCompraEventosDiaCard";



interface Evento {
    titulo : string;
    descripcion : string;
    proveedor : string;
    nota : string;
    tipo : string
}


interface props {
    fecha : string,
    eventos : Evento[]
}


export default function OrdenesCompraEventosDia({fecha,eventos} : props){
    return(
        <section>
            <h1 className="italic font-semibold">{fecha}</h1>
            <div className="flex flex-col gap-2 ml-4">
                {
                    eventos.map((evento)=>{
                        return(
                            <OrdenesCompraEventosDiaCard evento={evento}></OrdenesCompraEventosDiaCard>
                        )
                    })

                }
            </div>
        </section>
    )
}