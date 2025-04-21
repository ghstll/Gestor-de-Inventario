import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const ordenesPorMes = [
    { mes: "Enero", cantidad: 12 },
    { mes: "Febrero", cantidad: 18 },
    { mes: "Marzo", cantidad: 25 },
    { mes: "Abril", cantidad: 37 },  // Ejemplo real con tus datos: 14 días = 14 órdenes o sumar cantidades
    { mes: "Mayo", cantidad: 9 },
    { mes: "Junio", cantidad: 15 },
    { mes: "Julio", cantidad: 22 },
    { mes: "Agosto", cantidad: 19 },
    { mes: "Septiembre", cantidad: 11 },
    { mes: "Octubre", cantidad: 17 },
    { mes: "Noviembre", cantidad: 13 },
    { mes: "Diciembre", cantidad: 10 },
  ];

export default function OrdenesCompraMesGrafica(){
    return(
         <div className="w-full h-full flex flex-col items-center gap-2 border border-black p-0 rounded-md">
            <h1 className="font-bold">Ordenes de compra por mes (2025)</h1>
             <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={ordenesPorMes}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="1 1" stroke="black"  />
                                <XAxis dataKey="mes" fontSize={"18px"}stroke="black" tick = {{fill : "black"}} />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="cantidad"
                                    stroke={"orange"}
                                    activeDot={{ r: 8 }}
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
         </div>
    )
}