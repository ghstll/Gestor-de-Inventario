

interface props{
    children : React.ReactNode
}


export default function ResultadosContainer({children} : props) {
    return (
        <section className="w-full bg-[#1a1b22] rounded-md h-fit p-3 flex flex-col gap-4">
            <h1 className="text-white text-center font-thin">Resultados</h1>
            {children}
        </section>
    )
}