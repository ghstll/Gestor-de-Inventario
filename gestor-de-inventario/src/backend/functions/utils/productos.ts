interface productosBajoStock{
    nombre : string
    cantidad : number
}
interface ProductosBajoStockPorDepartamento{
    departamento : string
    productos : productosBajoStock[]
}


export async function getProductosBajoStockPorDepartamento(){
    try {
        const response = await fetch("http://localhost:3001/api/productos/bajostock/group_by_departamento");
        const data : ProductosBajoStockPorDepartamento[] = await response.json()
        return data 
    } catch (error) {
        console.error("Error al obtener los productos con bajo stock por departamento : ", error);
        return []
    }
}   