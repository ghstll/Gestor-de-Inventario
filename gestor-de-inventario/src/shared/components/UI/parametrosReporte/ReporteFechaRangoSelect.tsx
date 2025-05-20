interface props{
  setFechaInicial : (value : string) => void;
  setFechaFinal : (value : string) => void;
}
export default function ReporteFechaRangoSelect({setFechaInicial,setFechaFinal} : props) {
  return (
    <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
            <label className="font-medium text-white" htmlFor="fecha-inicial">Fecha Inicial</label>
            <input className="bg-[#3e4051] rounded-md w-full text-white p-1" type="date" id="fecha-inicial" lang="es" onChange={(e)=>setFechaInicial(e.target.value)}/>
        </div>
        <div className="flex gap-2 items-center">
            <label className="font-medium text-white" htmlFor="fecha-inicial">Fecha Final</label>
            <input className="bg-[#3e4051] rounded-md w-full text-white p-1" type="date" id="fecha-inicial" onChange={(e)=> setFechaFinal(e.target.value)}/>
        </div>
    </div>
  )
}