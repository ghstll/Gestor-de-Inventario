import icon from "../../../shared/assets/icons/box.svg";
interface props {
    nombre: string;
    cantidad: number;
    categoria: string;
    descripcion: string;
    cantidad_critica : number;

    selectCard : () => void;
}

export default function ProductoOrdenCompraCard({
    nombre,
    cantidad,
    categoria,
    descripcion,
    cantidad_critica,
    selectCard
}: props) {
    return (
        <section className="border border-white rounded-md text-white flex items-center p-4 gap-3 cursor-pointer hover:bg-[#151515] duration-500" onClick={selectCard}>
            <img src={icon} alt="" />
            <div className="font-light">
                <div className="flex gap-5 items-center">
                    <div className="flex gap-2 flex-col">
                        <div className="flex gap-3">
                            <h1>Nombre del producto :</h1>
                            <h1 className="font-bold">{nombre}</h1>
                        </div>
                        <div className="flex gap-2">
                            <h1>Categoria :</h1>
                            <h1 className="font-bold">{categoria}</h1>
                        </div>
                        <h1>{descripcion}</h1>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <div>
                            <h1>Stock actual:</h1>
                            <h1 className="font-bold">{cantidad} Unidades</h1>
                        </div>
                        <div>
                            <h1>Cantidad critica:</h1>
                            <h1 className="font-bold">{cantidad_critica}</h1>
                        </div>
                    </div>
                </div>
              
            </div>
        </section>
    );
}
