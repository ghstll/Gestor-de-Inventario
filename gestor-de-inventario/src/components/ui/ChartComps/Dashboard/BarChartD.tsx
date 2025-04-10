import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const bajoStockData = [
    { producto: "Camiseta Blanca", Cantidad: 5 },
    { producto: "Pantalón Jeans", Cantidad: 3 },
    { producto: "Tenis Urbanos", Cantidad: 2 },
    { producto: "Zapatos de Cuero", Cantidad: 1 },
    { producto: "Mouse Inalámbrico", Cantidad: 4 },
    { producto: "Teclado Mecánico", Cantidad: 6 },
    { producto: "Silla Ergonómica", Cantidad: 2 },
    { producto: "Escritorio Compacto", Cantidad: 3 },
    { producto: "Shampoo Anticaspa", Cantidad: 7 },
    { producto: "Pasta Dental", Cantidad: 5 },
    { producto: "Cargador de Celular", Cantidad: 2 },
    { producto: "Auriculares Bluetooth", Cantidad: 1 },
    { producto: "Cámara Web", Cantidad: 3 },
    { producto: "Ratón Gamer", Cantidad: 4 },
    { producto: "Mochila Deportiva", Cantidad: 2 },
    { producto: "Camiseta Deportiva", Cantidad: 1 },
    { producto: "Chaqueta de Invierno", Cantidad: 5 },
    { producto: "Sudadera Con Capucha", Cantidad: 3 },
    { producto: "Batería Externa", Cantidad: 6 },
    { producto: "Altavoces Portátiles", Cantidad: 2 },
    { producto: "Lentes de Sol", Cantidad: 4 },
    { producto: "Reloj Inteligente", Cantidad: 1 },
    { producto: "Botellas Térmicas", Cantidad: 7 },
    { producto: "Calcetines Deportivos", Cantidad: 5 },
    { producto: "Gorra Deportiva", Cantidad: 2 },
    { producto: "Zapatos de Running", Cantidad: 3 },
    { producto: "Pantalón Corto Deportivo", Cantidad: 2 },
    { producto: "Chaqueta Impermeable", Cantidad: 1 },
    { producto: "Guantes de Invierno", Cantidad: 4 },
    { producto: "Mochila de Senderismo", Cantidad: 5 },
    { producto: "Linterna LED", Cantidad: 3 },
    { producto: "Chaqueta de Plumas", Cantidad: 2 },
    { producto: "Botines de Fútbol", Cantidad: 1 },
];



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
    return (
        <article className="flex flex-col items-center ml-0 border border-gray-600 w-full h-fit p-2  rounded-2xl cursor-pointer ">
            <h1 className="font-semibold">Productos de bajo stock</h1>
            <BarChart
                width={1000}
                height={500}
                data={bajoStockData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={50}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="producto" angle={0} />{" "}
                {/* Rota los nombres de los productos */}
                <YAxis />
                <Tooltip />
                {/* <Bar dataKey="Cantidad  " stackId="a" fill={colorsBars[Math.floor(Math.random ()*colorsBars.length) ]} /> */}
                <Bar dataKey="Cantidad" stackId="a">
                    {bajoStockData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colorsBars[index % colorsBars.length]}
                        />
                    ))}
                </Bar>
            </BarChart>
        </article>
    );
}
