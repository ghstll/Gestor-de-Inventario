import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { getRecepcionesUltimos7dias } from "../../../backend/routes/api/functions/Operaciones/Recepciones"
interface props{
    tipo : "Recepciones" | "Devoluciones" | "Mermas" | "Siniestros" | "Transferencias"
}
interface data{
    fecha : string
    cantidad : number
}
export default function UltimosRegistrosSemana({tipo} : props) {
    const [data,setData] = useState<data[]>([])
    const handleTipoRegistros = async () =>{
        if(tipo === "Recepciones") setData(await getRecepcionesUltimos7dias())
    }
    useEffect(()=>{
        handleTipoRegistros()
    },[tipo]) 
    console.log(data)
    return (
        <article className="rounded-md flex flex-col items-center justify-center bg-[#1a1b22]">
            {
            data.length > 1 ? 
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2" stroke="white" vertical= {false} />
                        <XAxis dataKey="fecha"/>
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor : "black"}}/>
                        <defs>
                                <linearGradient id='gradient_ultimos_registros_semana' x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
                                <stop offset={"10%"} stopColor='#00c6fc' stopOpacity={1}>
                                </stop>
                                <stop offset={"90%"} stopColor='#00c6fc' stopOpacity={0.01}></stop>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="cantidad" stroke="white" fill="url(#gradient_ultimos_registros_semana)" />
                    </AreaChart>
                </ResponsiveContainer>
                :
                <h1 className="text-center font-bold text-white">No se encontraron datos de {tipo} de los ultimos 7 dias</h1>
            }
        </article>
    )
}