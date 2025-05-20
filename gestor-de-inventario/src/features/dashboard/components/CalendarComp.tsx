import Calendar from 'react-calendar';
import './CalendarComp.css';



// RECORDARTIO : Cambiar el tipo de proveedor de number a String cuando se este usando la API y no archivos locales JSON

  interface events{
            id : string
            id_orden_compra  : number
            fecha_evento : string
            tipo_evento : string
            usuario : string
            observaciones : string
            creado_en :string            
        }
    interface props{
        title : string
    }
export default function CalendarComp({title} : props) {
    return (
    <div className='border border-white rounded-md flex flex-col p-2  h-fit w-full gap-3 bg-black text-white'>
        <h1 className='text-center font-bold'>{title}</h1>
        <Calendar
        />
        <hr className='bg-white border-none h-[1px]'/>
    </div>
  );
}