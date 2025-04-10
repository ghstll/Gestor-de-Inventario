
const ultimoMovimiento  = 1423.20


export default function Ventas(){
    return(
        <article className="border border-gray-700 w-auto p-5 rounded-2xl">
            <h1 className="font-semibold text-xl">Ventas de hoy </h1>
            <h1 className="font-bold text-3xl">$ 74,288.20</h1>
            <div className="flex gap-5">
                <h2 className={`font-semibold text-xl ${ultimoMovimiento >= 0 ? "text-green-700" : "text-red-700"}`}>{ultimoMovimiento  >= 0  ? `+ $ ${ultimoMovimiento}` : `- $ ${Math.abs(ultimoMovimiento)}`}</h2>
                <h2>Ultimo movimiento</h2>
            </div>
        </article>
    )
}