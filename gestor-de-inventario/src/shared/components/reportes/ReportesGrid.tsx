interface Resultado {
    folioNota: string;
    fechaNota: string;
    proveedor: string;
    nombre: string;
    subtotal: string;
    iva: string;
    ieps: string;
    totalDevolucion: string;
  }
  
  
  interface Props {
    columns: string[];
    resultados : Resultado[];
  }
  


export default function ReportesGrid({columns,resultados} : Props) {

    const totalesSubtotal = resultados.reduce((acc,resultado)=>{
        return acc + parseFloat(resultado.subtotal)
    },0)
    const totalesIva = resultados.reduce((acc,resultado)=>{
        return acc + parseFloat(resultado.iva)
    },0)

    const totalesIEPS = resultados.reduce((acc,resultado)=>{
        return acc + parseFloat(resultado.ieps)
    },0)

    const totalesTotalDevolucion = resultados.reduce((acc,resultado)=>{
        return acc + parseFloat(resultado.totalDevolucion)
    },0)

  return (
    <section className="w-full h-full grid" style={{gridTemplateColumns: `repeat(${columns.length}, 1fr)`,gridAutoRows: "minmax(20px, 75px)"}}>
        {
            columns.map((column)=>{
                return(
                    <div className="h-fit px-4">
                        <h1 className="font-semibold h-fit text-start">{column}</h1>
                    </div>
                )
            })
        }
        {
            resultados.map((resultado,index)=>{
                if(index % 2 === 0){
                    return(
                        <>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">{resultado.folioNota}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start "><h1 className="font-semibold text-xs">{resultado.fechaNota}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">{resultado.proveedor}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">{resultado.nombre}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${resultado.subtotal}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${resultado.iva}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${resultado.ieps}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${resultado.totalDevolucion}</h1></div>
                        </>
                        )
                }else{
                    return(
                        <>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{resultado.folioNota}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{resultado.fechaNota}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{resultado.proveedor}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{resultado.nombre}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${resultado.subtotal}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${resultado.iva}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${resultado.ieps}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${resultado.totalDevolucion}</h1></div>
                        </>
                    )

                }
            })
        }
        <div className="col-span-4 h-[15px] ml-2">
            <h1 className="font-semibold text-start text-sm">Totales</h1>
        </div>
        <div  className="h-[15px] ml-2 ">
           <h1 className="font-semibold text-start text-sm">${totalesSubtotal}</h1>
        </div>
        <div  className="h-[15px] ml-2 ">
           <h1 className="font-semibold text-start text-sm">${totalesIva}</h1>
        </div>
        <div  className="h-[15px] ml-2 ">
           <h1 className="font-semibold text-start text-sm">${totalesIEPS}</h1>
        </div>
        <div  className="h-[15px] ml-2 ">
           <h1 className="font-semibold text-start text-sm">${totalesTotalDevolucion}</h1>
        </div>
    </section>
  )
}