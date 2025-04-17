import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { useState } from "react";

const data = [
  // Semana 1 (Abril 2025)
  { fecha: "Lunes 01/04", Cantidad: 1200 },
  { fecha: "Martes 02/04", Cantidad: 2300 },
  { fecha: "Miércoles 03/04", Cantidad: 1800 },
  { fecha: "Jueves 04/04", Cantidad: 3100 },
  { fecha: "Viernes 05/04", Cantidad: 4000 },
  { fecha: "Sábado 06/04", Cantidad: 5200 },
  { fecha: "Domingo 07/04", Cantidad: 2900 },

  // Semana 2 (Abril 2025)
  { fecha: "Lunes 08/04", Cantidad: 1500 },
  { fecha: "Martes 09/04", Cantidad: 2500 },
  { fecha: "Miércoles 10/04", Cantidad: 2000 },
  { fecha: "Jueves 11/04", Cantidad: 3300 },
  { fecha: "Viernes 12/04", Cantidad: 4100 },
  { fecha: "Sábado 13/04", Cantidad: 5000 },
  { fecha: "Domingo 14/04", Cantidad: 2700 },
];

export default function MovimientosSemanales({darkMode} : {darkMode : boolean}) {

    const [movimientosSemanales,setMovimientosSemanales] = useState<any[]>([])

    return (  
        <article className={`w-full h-full flex flex-col items-center p-3 border rounded-lg ${darkMode ? "border-white text-white duration-700" : "border-black text-black duration-700"}`}>
          <div className="w-full h-fit flex justify-center">
            <h1 className="font-semibold">Ventas de la Semana</h1>
          </div>  
            <ResponsiveContainer width="100%" height="100%">
                <LineChart  
                    width={500}
                    height={300}    
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? 'white' : "black"} style={{transition : 'stroke 0.7s ease-in-out'}} />
                    <XAxis dataKey="fecha" fontSize={"18px"}stroke={darkMode ? "white" : "black"} tick = {{fill : darkMode ? "white" : "black"}} style={{
                            transition : 'fill 0.7s ease-in-out'
                        }}/>
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="Cantidad"
                        stroke={darkMode ? "white" : "black"}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </article>
    );
}
