import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
  { fecha: "Lunes 01/04", Cantidad: 1200 },
  { fecha: "Martes 02/04", Cantidad: 2300 },
  { fecha: "Miércoles 03/04", Cantidad: 1800 },
  { fecha: "Jueves 04/04", Cantidad: 3100 },
  { fecha: "Viernes 05/04", Cantidad: 4000 },
  { fecha: "Sábado 06/04", Cantidad: 5200 },
  { fecha: "Domingo 07/04", Cantidad: 2900 },
  { fecha: "Lunes 08/04", Cantidad: 1500 },
  { fecha: "Martes 09/04", Cantidad: 2500 },
  { fecha: "Miércoles 10/04", Cantidad: 2000 },
  { fecha: "Jueves 11/04", Cantidad: 3300 },
  { fecha: "Viernes 12/04", Cantidad: 4100 },
  { fecha: "Sábado 13/04", Cantidad: 5000 },
  { fecha: "Domingo 14/04", Cantidad: 2700 },
];

const MovimientosSemanales = () => {
    const [movimientosSemanales, setMovimientosSemanales] = useState<any[]>([]);
    return (
        <article className="flex flex-1 flex-col gap-3 min-w-[300px] items-center p-2 rounded-md  bg-[#1a1b22] text-white duration-700 hover:brightness-125">
            <h1 className="font-bold">Ventas de la Semana</h1>
            <div className="w-full h-[250px]">
                <ResponsiveContainer  width="100%" height="100%" debounce={300}>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="5 5" stroke="white" />
                        <XAxis dataKey="fecha" stroke="white" tick={{ fill: "white" }} />
                        <YAxis stroke="white" />
                        <Tooltip contentStyle={{
                        backgroundColor : "black"
                        }}/>
                        <defs>
                            <linearGradient id='gradient' x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
                                <stop offset={"10%"} stopColor='#b757d4' stopOpacity={1}>
                                </stop>
                                <stop offset={"90%"} stopColor='#b757d4' stopOpacity={0.01}></stop>
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="Cantidad"
                            stroke="white"
                            fill="url(#gradient)"
                            fillOpacity={1}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
};
export default MovimientosSemanales;
