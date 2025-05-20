    import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

    interface DataStructure{
        fecha : string;
        cantidad : number
    }

    interface Props {
        title: string;  
        data : DataStructure[]
        xKey : string
        yKey : string
        color : string;
    }
export default function GraficaArea({ title, data, xKey, yKey ,color}: Props) {

        const gradientID = `gradient-${color.replace("#","")}`
        
        return (
           <article className="flex flex-1 flex-col gap-3 min-w-[300px] items-center  p-2  rounded-md  bg-[#1a1b22] text-white duration-700 hover:brightness-125">
                <h1 className="font-bold">{title}</h1>
                <div className='w-full h-[250px]'>
                    <ResponsiveContainer width="100%" height="100%" debounce={300}>
                        <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                        <CartesianGrid strokeDasharray="2" stroke="white" vertical = {false}/>
                        <XAxis dataKey={xKey}/>
                        <YAxis stroke="white" dataKey={yKey} allowDecimals = {false}
                        />
                        <Tooltip contentStyle={{
                            backgroundColor : "black"
                        }}/>
                        <defs>
                            <linearGradient id={gradientID} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="10%" stopColor={color} stopOpacity={0.8   } />
                                <stop offset="90%" stopColor={color} stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Area
                            // isAnimationActive={false}
                            type="monotone"
                            dataKey={yKey}
                            stroke={color}
                            fill={`url(#${gradientID})`}
                            fillOpacity={1}
                        />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </article>
        );
    }
