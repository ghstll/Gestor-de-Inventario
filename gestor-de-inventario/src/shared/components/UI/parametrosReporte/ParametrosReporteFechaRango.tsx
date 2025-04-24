interface props{
  setFechaInicial : (value : string) => void;
  setFechaFinal : (value : string) => void;
}


export default function ParametrosReporteFechaRango({setFechaInicial,setFechaFinal} : props) {
  return (
    <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
            <label className="font-medium" htmlFor="fecha-inicial">Fecha Inicial</label>
            <input className="border border-black rounded-md p-1 " type="date" id="fecha-inicial" onChange={(e)=>setFechaInicial(e.target.value)}/>
        </div>
        <div className="flex gap-2 items-center">
            <label className="font-medium" htmlFor="fecha-inicial">Fecha Final</label>
            <input className="border border-black rounded-md p-1 " type="date" id="fecha-inicial" onChange={(e)=> setFechaFinal(e.target.value)}/>
        </div>
    </div>
  )
}