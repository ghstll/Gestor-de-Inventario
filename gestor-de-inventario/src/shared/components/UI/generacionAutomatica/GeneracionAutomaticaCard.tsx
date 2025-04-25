interface Props {
  title : string;
  formatos : string[];
  activo :  boolean;
  destinatarios : string[];
}

export default function GeneracionAutomaticaCard({...props}: Props) { 
  return (
    <article className="border border-black rounded-md p-2 w-full">
        <h1>{props.title}</h1>
        <div>
          <h1 className="font-medium">Destinatarios : </h1>
          <div className="ml-3">
            {
              props.destinatarios.map((destinatario) => {
                return (
                    <h1>{destinatario}</h1>
                )
              })  
            }
          </div>
        </div>
        <div>
          <h1 className="font-medium">Formatos : </h1>
          <div>
            {
              props.formatos.map((formato) => {
                return (
                    <h1>{formato}</h1>
                )
              })  
            }
          </div>
        </div>
        <div>
          <h1>Estado : {props.activo ? "Activo" : "Desactivado"} </h1>
        </div>
    </article>
  )
}