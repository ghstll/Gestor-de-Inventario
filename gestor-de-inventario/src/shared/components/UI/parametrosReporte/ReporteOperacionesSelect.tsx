  interface props{
    setOperacion : React.Dispatch<React.SetStateAction<Operacion | null>>
  }


  export type Operacion = 
    | "Ordenes de compra" 
    | "Recepciones" 
    | "Devoluciones" 
    | "Mermas" 
    | "Siniestros" 
    | "Transferencias";
  export default function ReporteOperacionesSelect({setOperacion} : props) {
    const operacionesOptions = [
      "Ordenes de compra",
      "Recepciones",
      "Devoluciones",
      "Mermas",
      "Siniestros",
      "Transferencias",
    ]

    return (
      <div className="flex gap-2 items-center w-full">
        <label htmlFor="operaciones-select" className="font-medium text-white">Operacion</label>
        <select name="operaciones_select" id="operaciones_select" className="bg-[#3e4051] rounded-md w-full text-white p-1" onChange={(e) => setOperacion(e.target.value as Operacion)}>
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