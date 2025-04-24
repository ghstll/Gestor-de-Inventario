interface props{
  setOperacion : (value : string) => void;
}
export default function ParametrosReporteOperaciones({setOperacion} : props) {


  const operacionesOptions = [
    "Ordenes de compra",
    "Recepciones",
    "Devoluciones",
    "Mermas",
    "Siniestros",
    "Transferencias",
  ]

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="operaciones-select" className="font-medium">Operacion</label>
      <select name="" id="operaciones-select" className="border border-black rounded-md p-1 " onChange={(e) => setOperacion(e.target.value)}>
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