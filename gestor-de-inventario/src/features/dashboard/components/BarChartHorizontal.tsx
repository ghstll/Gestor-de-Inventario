import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import { useEffect, useState } from "react";

const colorsBars = [   //Array de colores de donde agarrara la grafica para pintar las barras
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",  
    "#ff7c43",
    "#ffa600",
];

interface props{
    data : object[]
    title : string
}

export default function BarChartHorizontal({...props} : props) {    
    const [productosBajoStock, setProductosBajoStock] = useState<any[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/productosbajostock"          
                );
                if (!response.ok) {
                    throw new Error("Error en tu solicitud de datos");
                }
                const data = await response.json();
                setProductosBajoStock(data);
            } catch (error) {
                console.error("Error al obtener los datos");
            }
        }
        fetchData();
    }, []);
    return (
        <article className="flex flex-1 flex-col gap-3 items-center bg-[#1a1b22] min-w-[300px] p-2 text-white rounded-md duration-700 hover:brightness-125">
            <h1 className="font-bold">{props.title}</h1>
            <div className="w-full h-[250px]">
                <ResponsiveContainer  width="100%" height="100%" debounce={100} >
                    <BarChart
                        data={props.data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barGap={0}
                    >
                        <CartesianGrid strokeDasharray="3 3"  stroke="white" style={{transition : 'stroke 0.7s ease-in-out'}}/>
                        <XAxis  dataKey="nombre" angle={0} tick = {{fill : "white"}}/>
                        {/* Rota los nombres de los productos */}
                        <YAxis />
                        <Tooltip />
                        {/* <Bar dataKey="Cantidad  " stackId="a" fill={colorsBars[Math.floor(Math.random ()*colorsBars.length) ]} /> */}
                        <Bar dataKey="cantidadActual" name={'Cantidad Actual'}  fill={colorsBars[0]}></Bar>
                        <Bar dataKey="cantidadCritica" name={'Cantidad Critica'}  fill={colorsBars[4]}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
}
    