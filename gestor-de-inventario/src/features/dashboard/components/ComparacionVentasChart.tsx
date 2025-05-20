import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { getVentasFiltradasPorAnios } from "../../../backend/routes/api/functions/reportes/ventas"

interface ventas_comparacion{
    nombre_mes :string
    anio_1 : number
    anio_2 : number
}
export default function ComparacionVentasChart() {
    const [allData ,setAllData] = useState<ventas_comparacion[]>([])
    const [primerAnio,setPrimerAnio] = useState<string>("2024")
    const [segundoAnio,setSegundoAnio] = useState<string>("2025")

    const handleChangeSelect = async (e: React.ChangeEvent<HTMLSelectElement>) =>{
        if(e.target.id == "primer_anio"){
            setPrimerAnio(e.target.value)
        }else{
            setSegundoAnio(e.target.value)
        }
    }

    useEffect(()=>{
        const fetchData = async () =>{
            if(primerAnio && segundoAnio){
                const data = await getVentasFiltradasPorAnios(primerAnio,segundoAnio)
                setAllData(data)
            }
        }
        fetchData()
    },[primerAnio,segundoAnio])
    console.log(allData)
    return (
        <article className="flex flex-1 flex-col gap-3 min-w-[300px] items-center p-2 rounded-md  bg-[#1a1b22] text-white duration-700 hover:brightness-125 overflow-y-auto scrollbarclass">
            <h1 className="font-bold">Comparacion de Ventas por año</h1>
            <div className="flex gap-5">
                <select name="primer_anio" id="primer_anio" className="bg-[#3e4051] rounded-md" onChange={handleChangeSelect}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024" selected>2024</option>
                    <option value="2025">2025</option>
                </select>
                <h1 className="font-bold">Contra</h1>
                <select name="segundo_anio" id="segundo_anio" className="bg-[#3e4051] rounded-md" onChange={handleChangeSelect}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025" selected>2025</option>
                </select>
            </div>
            <div className="w-full h-[250px] flex">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={allData}
                        syncId="anyId"
                        margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2" stroke="white" vertical= {false} />
                        <XAxis dataKey="nombre_mes"/>
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor : "black"}}/>
                        <defs>
                            <linearGradient id='gradient_primer_area' x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
                                <stop offset={"10%"} stopColor='#00c6fc' stopOpacity={1}>
                                </stop>
                                <stop offset={"90%"} stopColor='#00c6fc' stopOpacity={0.01}></stop>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="anio_1" stroke="white" fill="url(#gradient_primer_area)" />
                    </AreaChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={allData}
                        syncId="anyId"
                        margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2" stroke="white" vertical= {false} />
                        <XAxis dataKey="nombre_mes" />
                        <YAxis />
                        <Tooltip contentStyle={{backgroundColor : "black"}}/>
                        <defs>
                            <linearGradient id='gradient_segunda_area' x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
                                <stop offset={"10%"} stopColor='#9500ff' stopOpacity={1}>
                                </stop>
                                <stop offset={"90%"} stopColor='#9500ff' stopOpacity={0.00001}></stop>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="anio_2" stroke="white" fill="url(#gradient_segunda_area)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </article>
    )
}