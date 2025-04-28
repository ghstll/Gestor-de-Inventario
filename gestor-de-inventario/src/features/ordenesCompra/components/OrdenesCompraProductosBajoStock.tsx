import "../../../shared/scrollbarcss.css";
import OrdenesCompraProductosBajoStockCard from "./OrdenesCompraProductosBajoStockCard";

export default function OrdenesCompraProductosBajoStock(){

    const productosBajoStock = [
        { nombre: "Agua embotellada 600ml", proveedor: "Coca-Cola", cantidad: 12 },
        { nombre: "Harina de trigo 1kg", proveedor: "Bimbo", cantidad: 8 },
        { nombre: "Cereal Chocapic", proveedor: "Nestlé", cantidad: 5 },
        { nombre: "Refresco Pepsi 2L", proveedor: "PepsiCo", cantidad: 9 },
        { nombre: "Leche entera 1L", proveedor: "Lala", cantidad: 6 },
        { nombre: "Cerveza Corona", proveedor: "Grupo Modelo", cantidad: 11 },
        { nombre: "Galletas Oreo", proveedor: "Mondelēz", cantidad: 4 },
        { nombre: "Detergente en polvo 500g", proveedor: "Unilever", cantidad: 7 },
        { nombre: "Aceite vegetal 1L", proveedor: "La Costeña", cantidad: 10 },
        { nombre: "Yogur natural 125g", proveedor: "Danone", cantidad: 3 },
      ];
      

    return(
        <section className="flex flex-col w-full h-full border border-black items-center gap-2 rounded-md  overflow-y-auto scrollbarclass bg-white" >
            <div className="flex flex-col items-center">
                <h1 className="font-bold">Productos con bajo Stock</h1>
                <h1 className="text-center font-thin italic">Te mostramos una lista de los productos que necesitan reabastecerse</h1>
            </div>
            <div className="w-full flex flex-col gap-2 p-2">
                {
                    productosBajoStock.map((producto) =>{
                        return(
                            <OrdenesCompraProductosBajoStockCard {...producto}></OrdenesCompraProductosBajoStockCard>
                        )
                    })
                }
            </div>
        </section>
    )
}