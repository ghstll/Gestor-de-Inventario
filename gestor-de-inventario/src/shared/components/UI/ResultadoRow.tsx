interface Props {
    data: object;
    index : number
}




export default function ResultadoRow({ data ,index}: Props) {

    const colores_estados = {
        pendiente : "#0778e8",
        aprobada : "#2b8200",
        enviada : "#6b17e8",
        cancelada : "#e80212",
        cerrada : "#fa4407"
    }

    return (
        <article className={`flex justify-between border border-white rounded-md p-2 ${index%2 === 0 ? "bg-gray-900" : "bg-black"}`}>
            {Object.entries(data).map(([key, value]) => (
                <div className="flex flex-col text-white items-center justify-center gap-3">
                    <h1 className="font-bold">{key}</h1>
                    {
                        key === "Estado" ? <h1 className="p-2 rounded-md" style={{backgroundColor : colores_estados[value as keyof typeof colores_estados]}}>{value}</h1> : 
                        <h1>{value}</h1>
                    }
                
                </div>
            ))}
        </article>
    );  
}