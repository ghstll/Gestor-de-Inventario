import OrdenesCompraEventosDia from "./OrdenesCompraEventosDia";


interface Evento {
    titulo : string;
    descripcion : string;
    proveedor : string;
    nota : string;
    tipo : string
}

interface dia{
    fecha : string;
    eventos : Evento[]
}

interface EventosProps{
    dia : dia[]
}


export default function OrdenesCompraEventos({dia} : EventosProps){


    const fechaFormatString = (fecha : string) : string =>{
        const formatClear =  fecha.substring(0,fecha.indexOf('T'))
        const digits = formatClear.split("-")
        return digits[2]+"-"+digits[1]+"-"+digits[0]
    }




    return(
        <article className="w-full flex flex-col items-center gap-2">
            <h1 className="font-semibold">Eventos relacionados a ordenes de compra</h1>
            <div className="w-full flex flex-col">
                {
                    dia && Array.isArray(dia) && dia.length > 0 ? 
                                ( dia.map((dia)=>{
                                    return <OrdenesCompraEventosDia fecha= {fechaFormatString(dia.fecha)} eventos={dia.eventos}></OrdenesCompraEventosDia>
                                })) : 
                                (
                                    <div className="flex w-full justify-center">
                                        <h1 className="font-semibold">No hay ningun evento</h1>
                                    </div>
                                )
                }
            </div>
        </article>
    )
}