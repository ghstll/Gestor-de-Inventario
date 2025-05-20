interface props{
    title : string
    cantidad : number
    icon : string
    bgcolor : string
    maxValue : number
}

export default function InfoRapidaCard({title,cantidad,icon,bgcolor,maxValue} : props) {

    const visualMaxWidth = Math.min((cantidad / maxValue)*100,100   )

    return (
        <section className="flex flex-col p-2 gap-2">
            <div className="flex  items-center gap-4 justify-between">
                <div className="flex gap-2 w-[70%] justify-between">
                    <img src={icon} alt="" className="p-2  rounded-md" style={{backgroundColor : bgcolor}}/>
                    <h1 className="font-medium text-gray-300">{title}</h1>
                </div>
                <div className="w-[60%] bg-gray-700 rounded-full h-1 overflow-hidden">
                    <div
                        className="h-full transition-all duration-500"
                        style={{ width: `${visualMaxWidth}%` ,
                                backgroundColor : bgcolor            
                    }}
                    ></div>
                </div>
                <h1 className="text-white font-bold">{cantidad}</h1>
            </div>
            <hr className="w-full border border-gray-700"/>
        </section>
    )
}