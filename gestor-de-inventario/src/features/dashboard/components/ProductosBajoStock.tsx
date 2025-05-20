import { useEffect, useState } from "react";
import { getProductosBajoStockPorDepartamento } from "../../../backend/functions/utils/productos";
import productoIcon from '../../../shared/assets/icons/asideMenu/ArticulosIcon.svg';
interface productosBajoStock{
    nombre : string
    cantidad : number
}
interface ProductosBajoStockPorDepartamento{
    departamento : string
    productos : productosBajoStock[]
}
export default function ProductosBajoStock() {
    const [dataProductosBajoStock,setDataProductosBajoStock] = useState<ProductosBajoStockPorDepartamento[]>([])
    useEffect(() =>{
        const fetchData = async () =>{
            const data = await getProductosBajoStockPorDepartamento()
            setDataProductosBajoStock(data)
        };fetchData()
    },[])
    return (
        <article className="flex flex-1 flex-col items-center  bg-[#1a1b22] max-h-[400px] overflow-y-auto scrollbarclass p-4 text-white rounded-md duration-700">
            <h1 className="font-bold">Productos con bajo stock</h1>
            <h1 className="italic">Las ordenes de compra ya han sido enviadas a el correo</h1>
            <div className="w-full  ">
                {
                    dataProductosBajoStock.map((departamento,index) =>(
                        <div className={`flex flex-col gap-1  rounded-md duration-500`}>
                            <h1 className="italic font-bold">{departamento.departamento}</h1>
                            <div className="flex gap-3 p-3">
                                <div className="border-r"></div>
                                <div className="flex flex-col gap-2 w-full">
                                    {
                                        departamento.productos.map((producto) =>(
                                            <div className="flex items-center bg-[#0a0a0a] rounded-md gap-11 hover:brightness-150 duration-500">
                                                <img src={productoIcon} alt="" />
                                                <div className="flex w-full justify-between items-center ps-1 pe-3">
                                                    <div>
                                                        <h1>{producto.nombre}</h1>
                                                        <h1>Cantidad actual : {producto.cantidad}</h1>
                                                    </div>
                                                        <button className="text-white rounded-md bg-[#222222] p-1">
                                                            <h1>Ver orden de compra</h1>
                                                        </button>
                                                    </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>  
                    ))
                } 
            </div>
        </article>  
    );
}
