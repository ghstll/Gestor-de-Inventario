
interface parametros {
    año : number;
    mes : string;
}

interface ultimoReporte{
    exito : boolean;
    fecha_generacion : string;
    formato : string[];
    generado_por : string | null;
    id : number;
    mensaje_error : string | null;
    nombre_reporte : string;
    parametros : parametros;
    tipo_de_reporte : string;
    tipo_generacion : string;

}

interface props{
    ultimoReporte :  ultimoReporte;
}


import csv_icon from '../../../../shared/assets/icons/format/csv_icon.png';
import excel_icon from '../../../../shared/assets/icons/format/excel_icon.png';
import pdf_icon from '../../../../shared/assets/icons/format/pdf_icon.png';

export default function UltimosReportesGeneradosCard({ultimoReporte} : props){

    const formatDate = (date : string) : string[] =>{
        const fecha = date.split('T')[0]
        const time = date.split('T')[1]

        const timeFormated = time.split(".")[0]
        
        return [fecha,timeFormated]
    }

    return(
        <article className="flex flex-col border border-white rounded-md p-2 bg-black cursor-pointer hover:bg-gray-900 duration-200">
            <div className='flex gap-2 font-semibold italic'>
                {
                    formatDate(ultimoReporte.fecha_generacion).map((obj)=>{
                        return <h1>{obj}</h1>
                    })
                }
            </div>
            <div className='flex gap-3 font-medium'>
                <h1>Formatos : </h1>
                {
                    ultimoReporte.formato.map((formato)=>{
                        if(formato == "PDF"){
                            return <img src={pdf_icon} alt="" width={20} height={20} />
                        }
                        if(formato == "Excel"){
                            return <img src={excel_icon} alt="" width={20} height={20}/>
                        }
                        if(formato == "CSV"){
                            return <img src={csv_icon} alt="" width={20} height={20} />
                        }
                    })
                }
            </div>
            <div className='flex gap-2'>
                <h1 className='font-medium'>Generado por : </h1>
                {
                   ultimoReporte.generado_por == null ?  (<h1 className='italic'>Automaticamente</h1>) :
                                                        (<h1 className='italic'>{ultimoReporte.generado_por}</h1>)
                }
            </div>
        </article>
    )
}