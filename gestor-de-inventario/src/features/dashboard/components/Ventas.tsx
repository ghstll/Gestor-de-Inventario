
const ultimoMovimiento  = 1423.20


export default function Ventas(){
    return(
        <article className="border border-gray-700 text-black duration-700 w-full h-full p-3 rounded-lg">
            <h1 className="font-semibold text-base">Ventas de hoy </h1>
            <h1 className="font-bold text-xl">$ 74,288.20</h1>
            <div className="flex gap-5 justify-center items-center ">
                <h2 className={`font-semibold text-lg whitespace-nowrap ${ultimoMovimiento >= 0 ? "text-green-700" : "text-red-700"}`}>{ultimoMovimiento  >= 0  ? `+ $ ${ultimoMovimiento}` : `- $ ${Math.abs(ultimoMovimiento)}`}</h2>
                <h2>Ultimo movimiento</h2>
            </div>
        </article>
    )
}
