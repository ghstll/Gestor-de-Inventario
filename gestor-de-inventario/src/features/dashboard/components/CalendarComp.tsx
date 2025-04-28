import { useState } from 'react';
import Calendar from 'react-calendar';
import OrdenesCompraEventos from '../../ordenesCompra/components/OrdenesCompraEventos';
import './CalendarComp.css';



// RECORDARTIO : Cambiar el tipo de proveedor de number a String cuando se este usando la API y no archivos locales JSON


interface Evento {
    titulo : string;
    descripcion : string;
    proveedor : number;
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



export default function CalendarComp({dia} : EventosProps) {

    const [hoverDate, setHoverDate] = useState<Date | null>(null);

    const fechasMarcadasString = dia.map((dia)=>{
        
        const formatClear =  dia.fecha.substring(0,dia.fecha.indexOf('T'))
        const digits = formatClear.split("-")
        return digits[2]+"-"+digits[1]+"-"+digits[0]
    })



    
    const dateStringToObject = (dateStringsArray : string[]) : Date[] =>{   {/* Formato entrada DD-MM-YYYY (String) ----> Formato salida YYYY-MM-DD (Date)*/}
         return dateStringsArray.map((date)=>{
            const digits : string[] = date.split("-")

            const dia = parseInt(digits[0],10)
            const mes = parseInt(digits[1],10) - 1
            const año = parseInt(digits[2],10)
            
            return new Date(año,mes,dia)
            
        })
    }

    const fechasMarcadasDate = dateStringToObject(fechasMarcadasString)




    return (
    <div className='border border-black rounded-md flex flex-col p-2  h-full w-full gap-3 bg-white'>
        <Calendar className="border border-black"
            tileClassName = {({date,view}) =>{
                if(view === "month"){
                    return fechasMarcadasDate.find(
                        (markDate)=>
                            markDate.getDate() === date.getDate() &&
                            markDate.getMonth() === date.getMonth() &&
                            markDate.getFullYear() === date.getFullYear()
                    ) ? "highlight" : null
                }
                return null
            }}
        />
        <hr className='bg-gray-500 border-none h-[1px]'/>
        <div>
            <OrdenesCompraEventos dia={dia}></OrdenesCompraEventos>
        </div>
    </div>
  );
}