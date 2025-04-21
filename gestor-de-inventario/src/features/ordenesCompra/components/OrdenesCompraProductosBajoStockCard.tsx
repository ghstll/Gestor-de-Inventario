interface props {
    nombre : string,
    proveedor : string,
    cantidad : number
}


export default function OrdenesCompraProductosBajoStockCard(props : props){
    return(
        <article className="border border-black min-w-full flex items-center justify-between p-2 rounded-md">
            <div>
                <h1>{props.nombre}</h1>
                <h1 className="font-semibold">Proveedor : {props.proveedor}</h1>
            </div>
            <div className="whitespace-nowrap flex gap-2">
                <h1 className="whitespace-nowrap font-bold">Cantidad :</h1>
                <h1> {props.cantidad}</h1>
            </div>
        </article>
    )
}