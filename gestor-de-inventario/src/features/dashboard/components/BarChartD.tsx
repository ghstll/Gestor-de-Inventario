import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";


interface props{
    data : object[]
    title : string
}

export default function BarChartD({...props} : props) {
    return (
        <article className="bg-[#1a1b22]  w-full h-full p-2 flex flex-col items-center text-white  rounded-md duration-700 hover:brightness-125">
            <h1 className="font-bold">{props.title}</h1>
            <div className="w-full h-[250px]">
            <ResponsiveContainer   width="100%" height="100%" debounce={100}>
                    <BarChart
                        data={props.data}
                        // margin={{
                        //     top: 20,
                        //     right: 30,
                        //     left: 20,
                        //     bottom: 5,
                        // }}
                        barCategoryGap={7}
                    >
                        <CartesianGrid strokeDasharray="3 3"  stroke="white" style={{transition : 'stroke 0.7s ease-in-out'}}/>
                        <XAxis  dataKey="nombre" angle={0} tick = {{fill : "white"}}/>
                        {/* Rota los nombres de los productos */}
                        <YAxis />
                        <Tooltip />
                        {/* <Bar dataKey="Cantidad  " stackId="a" fill={colorsBars[Math.floor(Math.random ()*colorsBars.length) ]} /> */}
                        <Bar dataKey="cantidad" fill="#0b916c" radius={3}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
}
    