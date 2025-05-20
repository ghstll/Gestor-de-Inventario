import '../../../../shared/scrollbarcss.css'

interface props{
    children : React.ReactNode
}



export default function UltimosReportesGeneradosContainer({children} : props){

    

    return(
        <article className="flex flex-col w-full h-full border border-white p-2 gap-2 rounded-md bg-black text-white">
            <div className="flex flex-col gap-2 overflow-y-auto scrollbarclass p-2">
                <div className="w-full flex justify-center">
                    <h1 className="font-semibold">Ultimos reportes generados</h1>
                </div>
                {children}
            </div>
        </article>
    )
}
