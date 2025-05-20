import { useEffect, useState } from "react";
import DatosProveedor from "./DatosProveedor";
import ProductoOrdenCompraCard from "./ProductoOrdenCompraCard";
export interface Proveedor {
    id: number;
    nombre: string;
    contacto: string;
    telefono: string;
    email: string;
    direccion: string;
  }
  export interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: string;
    precio: number;
    descripcion: string;
    proveedor: number; // Referencia a proveedores.id
    cantidad_critica : number
  }
  

export default function NuevaOrdenCompra() {
    
    
    //Estados para guardar los valores seleccionados en los elementos Select
    const [proveedorSeleccionado , setProveedorSeleccionado] = useState<number | undefined>()

    //Estados para guardar la informacion que se muestra en los elementos Select
    const [dataProductosSelect,setDataProductosSelect] = useState<Producto[]>([])


    // Estados para guardar la data obtenida de la base de datos
    const [dataProveedores,setDataProveedores] = useState<Proveedor[]>([])
    const [dataProductos,setDataProductos] = useState<Producto[]>([])

    const fetchProveedores = async() =>{
        try {
            const response = await fetch("http://localhost:3001/api/proveedores")
            const data : Proveedor[] = await response.json()
            setDataProveedores(data)

            if(data.length > 0){
                const primerProveedor = data[0]
                setProveedorSeleccionado(primerProveedor.id)
            }
        } catch (error) {
            console.log("Error al obtener los proveedores: ",error)
        }
    };
    const fetchProductos = async() =>{
        try {
            const response = await fetch("http://localhost:3001/api/productos")
            const data = await response.json()
            setDataProductos(data)
            setDataProductosSelect(data)
        } catch (error) {
            console.log("Error al obtener los productos: ",error)
        }
    };
    
    useEffect(() =>{
        fetchProveedores()
        fetchProductos()
    },[])
    
    useEffect(()=>{
        if(proveedorSeleccionado === undefined || proveedorSeleccionado === null){
            setDataProductosSelect([])
            return;
        }


        const productosPorProveedor = dataProductos.filter(
            (producto) => producto.proveedor === proveedorSeleccionado
        )
        setDataProductosSelect(productosPorProveedor)
    },[proveedorSeleccionado,dataProductos])


    const proveedorActual = dataProveedores.find(proveedor => proveedor.id === proveedorSeleccionado)
    

    const handleOnChangeSelectProveedor = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        setProveedorSeleccionado(parseInt(e.target.value))
    }

return (
    <section className="w-fit h-fit border border-white rounded-md p-8 flex flex-col gap-2 bg-black" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-white font-bold italic text-3xl">Nueva orden de compra</h1>
        <hr className="w-full"/>
        <div className="flex gap-5">
            <div className="flex flex-col gap-3">
                <div className="flex  items-center gap-3">
                    <label htmlFor="select_proveedor" className="text-white">Seleccionar proveedor</label>
                    <select name="" id="select_proveedor" className="bg-black text-white border border-white rounded-md font-medium italic p-1 ps-10 pe-10" onChange={handleOnChangeSelectProveedor}>
                        {
                            dataProveedores.map((proveedor)=>{
                                return(
                                    <option value={proveedor.id} className="text-white">{proveedor.nombre}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="border border-white p-4 flex flex-col gap-3 rounded-md items-center">
                    <h1 className="text-white font-medium">{dataProductosSelect.length > 0 ? "Selecciona los productos que deseas añadir a la orden de compra" : "Este proveedor no provee ningun producto"}</h1>
                    <hr className="w-full"/>
                    <div className="flex flex-col gap-2">
                        {
                            dataProductosSelect.map((producto) =>{
                                return(
                                    <ProductoOrdenCompraCard
                                        selectCard={() => {}}
                                        nombre={producto.nombre}
                                        cantidad={producto.cantidad}
                                        categoria={producto.categoria}
                                        descripcion={producto.descripcion}
                                        cantidad_critica={producto.cantidad_critica}
                                    ></ProductoOrdenCompraCard>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <DatosProveedor
                    proveedor={proveedorActual}
                >
                </DatosProveedor>
            </div>
        </div>
    </section>
  )
}