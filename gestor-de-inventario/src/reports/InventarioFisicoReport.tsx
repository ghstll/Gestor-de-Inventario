import IMSSLogo from '../../assets/erasebg-transformed.png';
export default function InventarioFisicoReport(){
   
    const fechaActual = new Date()

    const mesActual = fechaActual.toLocaleDateString("es-ES", {
        month : "long"
    })

    return(
        <div>
            <section className='flex items-center gap-9'>
                <img src={IMSSLogo} alt="" className='w-[800px] h-[250px]'/> 
                <div className='flex flex-col font-bold items-center w-[800px] h-[100px] whitespace-nowrap'>
                    <h1>DIRECCION DE PRESTACIONES ECONOMICAS Y SOCIALES</h1>
                    <h1>COORDINACION DE CENTROS VACACIONALES,VELATORIOS,UNIDAD DE CONGRESOS Y TIENDAS</h1>
                    <h1>SISTEMA NACIONAL DE TIENDAS IMSS - SNTSS</h1>
                </div>
                <div className='font-semibold text-xl ml-20 whitespace-nowrap flex flex-col items-center'>
                    <h1>{fechaActual.getDate()} - {mesActual.charAt(0).toUpperCase() + mesActual.slice(1)} - {fechaActual.getFullYear()}</h1>
                    <h1>{fechaActual.getHours()} : {fechaActual.getMinutes()}</h1>
                </div>
            </section>
            <section className='ml-6'>
                <h1 className='font-bold text-3xl'>Resumen de inventario</h1>
            </section>
            <section>
                <h1>Sucursal : CD. VALLES (ID:39)</h1>
            </section>
            <hr />
        </div>
    )
}