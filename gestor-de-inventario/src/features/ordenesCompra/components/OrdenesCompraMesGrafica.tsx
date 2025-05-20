import { useEffect, useState } from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { getCantidadOrdenesDeCompraPorAño } from "../../../backend/routes/api/functions/Operaciones/OrdenesDeCompra";


interface dataOperacionesPorAño{
    nombre_mes : string
    ordenes : number    
}

export default function OrdenesCompraMesGrafica(){

    const [data,setData] = useState<dataOperacionesPorAño[]>([])
    const [anio,setAnio] = useState<string>("2025")
    const fetchData = async() =>{
        if(anio){
            setData(await getCantidadOrdenesDeCompraPorAño(anio))
        }
    };
    useEffect(() =>{
       fetchData()
    },[])
    useEffect(() =>{
        fetchData()
    },[anio])
    const handleOnChangeSelect = (e : React.ChangeEvent<HTMLSelectElement>)=>{
        setAnio(e.target.value)
        }
        console.log(data)
    return(
        <div className="w-full h-[300px] flex flex-col items-center gap-2 bg-[#1a1b22] p-2 rounded-md">
            <h1 className="font-bold text-white">Ordenes de compra por mes ({anio})</h1>
            <div className="flex items-center gap-4">
                <h1 className="text-white font-bold">Selecciona el año</h1>
                <select name="anio_select" id="anio_select" className="bg-[#3e4051] rounded-md text-white" onChange={handleOnChangeSelect} value={anio}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
                {
                data.length > 0 ?
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" stroke="white"  />
                        <XAxis dataKey={"nombre_mes"} fontSize={"18px"}stroke="white" tick = {{fill : "white"}} />
                        <YAxis/>
                        <Tooltip contentStyle={{backgroundColor : "black"}}/> 
                        <Line
                            type="monotone"
                            stroke={"orange"}
                            dataKey="ordenes"
                            activeDot={{ r: 8 }}
                            strokeWidth={2}
                        />
                    </LineChart>
                    </ResponsiveContainer> : <h1 className="text-white">No se encontraron Ordenes de Compra de ese Año</h1>
                }
        </div>
    )
}