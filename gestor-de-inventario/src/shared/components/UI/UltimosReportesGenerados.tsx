
interface parametros {
    año : number;
    mes : string;
}

interface ultimoReporte{
    exito : boolean;
    fecha_generacion : string;
    formato : string;
    generado_por : string;
    id : number;
    mensaje_error : string | null;
    nombre_reporte : string;
    parametros : parametros;
    tipo_de_reporte : string;
    tipo_generacion : string;

}

interface props{
    ultimoReporte :  ultimoReporte
}

export default function UltimosReportesGenerados({ultimoReporte } : props){
    return(
        <article className="flex flex-col">
            <h1>{ultimoReporte.fecha_generacion}</h1>
            <h1>{ultimoReporte.formato}</h1>
            <h1>{ultimoReporte.nombre_reporte}</h1>
            <h1>{ultimoReporte.generado_por}</h1>
        </article>
    )
}