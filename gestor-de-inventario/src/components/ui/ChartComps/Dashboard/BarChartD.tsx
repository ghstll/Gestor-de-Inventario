import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
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



export default function BarChartD() {

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


    const dataExample = [
        { nombre: "teclado_mecanico", cantidad: 10 },
        { nombre: "raton_inalambrico", cantidad: 15 },
        { nombre: "monitor_24_pulgadas", cantidad: 7 },
        { nombre: "portatil_gaming", cantidad: 5 },
        { nombre: "disco_duro_ssd_1tb", cantidad: 20 },
        { nombre: "memoria_ram_16gb", cantidad: 12 },
        { nombre: "placa_base_atx", cantidad: 8 },
        { nombre: "tarjeta_grafica_rtx3060", cantidad: 4 },
        { nombre: "fuente_poder_650w", cantidad: 9 },
        { nombre: "ventilador_rgb", cantidad: 25 },
        { nombre: "caja_micro_atx", cantidad: 6 },
        { nombre: "webcam_hd", cantidad: 14 },
        { nombre: "auriculares_gaming", cantidad: 11 },
        { nombre: "cable_hdmi", cantidad: 30 },
        { nombre: "silla_ergonomica", cantidad: 3 }
    ].sort((a,b) => a.cantidad - b.cantidad); 
    
    return (
        <article className="flex flex-col items-center ml-0 border border-gray-700 text-black duration-700 w-full h-full p-2  rounded-2xl cursor-pointer">
            <h1 className="font-semibold">Productos de bajo stock</h1>
            <div className="w-full h-[250px]">
                <ResponsiveContainer >
                    <BarChart
                        data={dataExample}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={50}
                    >
                        <CartesianGrid strokeDasharray="3 3"  stroke="black" style={{transition : 'stroke 0.7s ease-in-out'}}/>
                        <XAxis  dataKey="nombre" angle={0} tick = {{fill : "black"}}/>
                        {/* Rota los nombres de los productos */}
                        <YAxis />
                        <Tooltip />
                        {/* <Bar dataKey="Cantidad  " stackId="a" fill={colorsBars[Math.floor(Math.random ()*colorsBars.length) ]} /> */}
                        <Bar dataKey="cantidad" stackId="a">
                            {dataExample.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colorsBars[index % colorsBars.length]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
}
    