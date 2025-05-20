interface props {
    children : React.ReactNode
}
export default function ParametrosReporteContainer({children } : props ){
    return(
        <section  className="border justify-center flex flex-col items-center p-7 rounded-md gap-4 w-full cursor-pointer bg-[#181818]" >
            <h1 className="text-white font-bold">Ingresa los parametros para generar el reporte.</h1>
            <h1 className="text-gray-400 font-medium">Puedes visualizar los resultados mas abajo.</h1>
           {children}
        </section>
    )
}