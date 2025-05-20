interface props{
    setOperacionVenta : React.Dispatch<React.SetStateAction<Operacion | null>>
}

export type Operacion = 
 | "Venta por forma de pago"
 | "Venta por otros ingresos"
 | "Venta por Departamento"
 | "Venta mensual por Departamento"
 | "Costo de venta"

export default function ParametrosReporteVentaOperacion({setOperacionVenta} : props) {
    
    const operacionesOptions = [
         "Venta por forma de pago",
         "Venta por otros ingresos",
         "Venta por Departamento",
         "Venta mensual por Departamento",
         "Costo de venta"
    ]
    return (
        <div className="flex gap-2 items-center">
            <label htmlFor="operaciones-select" className="font-medium text-white">Operacion</label>
            <select name="" id="operaciones-select" className="border border-white rounded-md p-1 bg-black text-white" onChange={(e) => setOperacionVenta(e.target.value as Operacion)}>
                {operacionesOptions.map((operacion, index) => {
                return (
                    <option key={index} value={operacion} >
                    {operacion}
                    </option>
                )
                }
                )}
            </select>
        </div>
    )
}