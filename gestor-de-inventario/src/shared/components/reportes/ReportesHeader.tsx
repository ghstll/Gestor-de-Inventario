
import imss_banner from '../../assets/images/imss_banner.png';

interface props {
  fechaInicio : string | null;
  fechaFin : string | null;
  operacion : string | null;
}
export default function ReportesHeader({operacion,fechaFin,fechaInicio} : props) {

  const fecha = new Date()
  const fechaDia = fecha.getDate()
  const fechaMes = fecha.getMonth() + 1 
  const fechaAnio = fecha.getFullYear()

  return (
    <div className='flex w-full h-fit flex-col'>
      <section className="flex justify-between">
        <div className='h-fit w-fit'>
          <img src={imss_banner} alt="" className='h-[35px] w-[145px]'/>
        </div>
        <div className='font-bold flex flex-col items-center justify-center text-nowrap text-[9px] mr-[70px]'>
          <h4>DIRECCION DE PRESTACIONES ECONOMICAS Y SOCIALES</h4>
          <h4>COORDINACION DE CENTROS VACACIONALES, VELATORIOS, UNIDAD DE CONGRESOS Y TIENDAS</h4>
          <h4>SISTEMA NACIONAL DE TIENDA IMSS - SNTSS</h4>
          <h4>SUCURSAL: 39 CD.VALLES</h4>
        </div>
        <div className='font-bold italic text-nowrap flex items-center text-[12px]'>
          <h4>{fechaDia} - {fechaMes} - {fechaAnio}</h4>
        </div>
      </section>
      <div className='flex flex-col mt-3 items-center'>
        <h1 className='font-bold'>
            Notas de {operacion}
        </h1>
        <h1 className='font-bold'>Del Día: {fechaInicio} al Día: {fechaFin}</h1>
      </div>
    </div>
  )
}