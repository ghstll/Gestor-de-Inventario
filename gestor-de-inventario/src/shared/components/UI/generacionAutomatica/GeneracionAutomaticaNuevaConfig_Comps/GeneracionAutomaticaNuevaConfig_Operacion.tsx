interface props{
    setOperacionConfiguracion : React.Dispatch<React.SetStateAction<string>>;
    loadOperacion : string | null;
}
export default function GeneracionAutomaticaNuevaConfig_Operacion(props : props) {

    const operaciones : string[] = ["Ordenes de compra","Recepciones","Devoluciones","Mermas","Siniestros","Transferencias"]

  return (
    <article className="flex gap-3">
        <h1 className="font-medium">Operacion : </h1>
        <select name="" id="" className="border border-white rounded-md p-1 bg-transparent" value={props.loadOperacion || ""} onChange={(e)=> props.setOperacionConfiguracion(e.target.value)}>
            {
                operaciones.map((operacion,index) =>{
                    return <option  id={(index+1).toString()} value={operacion}>{operacion}</option>
                })
            }
        </select>
    </article>
  )
}   