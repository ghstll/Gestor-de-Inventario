
interface ReporteConfig {
    id: number;
    nombre: string;
    operacion: string; // Tipo de reporte
    fecha_inicial: string; // Fecha inicial del reporte
    fecha_final: string; // Fecha final del reporte
    cron_horario: string; // Configuración de cron job
    activo: boolean; // Si el reporte está activo o no
    formatos_salida: string[]; // Formatos de salida como PDF, Excel, etc.
    destinatarios: string[]; // Lista de destinatarios
    creado_en: string; // Fecha de creación
    actualizado_en: string; // Fecha de última actualización
}
interface props {
    dataobj : ReporteConfig
}

export default function GeneracionAutomaticaModal_Modificar({...props} : props) {
    return (
        <article className="w-[50%] h-[50%] bg-white">
            <h1>
                {props.dataobj.nombre}
                {props.dataobj.id}
            </h1>
        </article>
    )
}