import "../../../app/index.css";
import OrdenesCompraRecientesCard from "./OrdenesCompraRecientesCard";
export default function OrdenesCompraRecientes() {
    const ordenesDeCompra = [
        { fecha: "2025-04-01", hora: "09:15", proveedor: "Nestlé", estado: "Pendiente" },
        { fecha: "2025-04-02", hora: "11:30", proveedor: "Cemex", estado: "Completada" },
        { fecha: "2025-04-05", hora: "14:45", proveedor: "Bimbo", estado: "Cancelada" },
        { fecha: "2025-04-06", hora: "08:20", proveedor: "PepsiCo", estado: "Pendiente" },
        { fecha: "2025-04-10", hora: "10:00", proveedor: "Grupo Modelo", estado: "Completada" },
        { fecha: "2025-04-12", hora: "13:15", proveedor: "Arca Continental", estado: "Pendiente" },
        { fecha: "2025-04-15", hora: "15:40", proveedor: "DHL", estado: "Completada" },
        { fecha: "2025-04-18", hora: "09:00", proveedor: "Unilever", estado: "Pendiente" },
        { fecha: "2025-04-20", hora: "16:30", proveedor: "Coca-Cola", estado: "Completada" },
        { fecha: "2025-04-22", hora: "10:45", proveedor: "Lala", estado: "Pendiente" },
        { fecha: "2025-04-25", hora: "12:20", proveedor: "FEMSA", estado: "Cancelada" },
        { fecha: "2025-04-28", hora: "14:10", proveedor: "Telefónica", estado: "Pendiente" },
      ];
      

    return (
        <section className="flex flex-col w-full h-full border border-black items-center gap-2 rounded-md  overflow-y-auto" id="scrollbarstyle">
            <h1 className="font-bold">Ordenes de compra recientes</h1>
            <div className="w-full flex flex-col gap-2 p-2">{
                    ordenesDeCompra.length == 0 ? <h1 className="font-semibold text-center">Aqui se mostraran las ordenes de compra recientes</h1> : 
                    (
                        ordenesDeCompra.map((ordenCompra) => {
                            return (
                                <OrdenesCompraRecientesCard {...ordenCompra}></OrdenesCompraRecientesCard>
                                );
                        })
                    )}
            </div>
        </section>
    );
}