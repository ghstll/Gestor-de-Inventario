export default function RangoFecha(){
    return(
        <div className="flex gap-2 text-white">
           <div className="flex items-center justify-center gap-5">
                <h1 className="font-semibold">Fecha Inicial</h1>
                <input type="date"  className="bg-[#3e4051] rounded-md p-1"/>
           </div>
           <div className="flex items-center justify-center gap-5">
                <h1 className="font-semibold">Fecha Final</h1>
                <input type="date" className="bg-[#3e4051] rounded-md p-1"/>
           </div>
        </div>
    )
}

