
  
  interface Props {
    columnas: string[];
    data : any[]
}
  


export default function ReportesGrid({columnas,data} : Props) {
    const totalesSubtotal = Math.round(data.reduce((acc, registro) => {
        return acc + parseFloat(registro.subtotal);
    }, 0) * 100) / 100;
    
    const totalesIva = Math.round(data.reduce((acc, registro) => {
        return acc + parseFloat(registro.iva);
    }, 0) * 100) / 100;
    
    const totalesIEPS = Math.round(data.reduce((acc, registro) => {
        return acc + parseFloat(registro.ieps);
    }, 0) * 100) / 100;
    
    const totalesTotalDevolucion = Math.round(data.reduce((acc, registro) => {
        return acc + parseFloat(registro.total);
    }, 0) * 100) / 100;
    

  return (
    <section className="w-full h-full grid" style={{gridTemplateColumns: `repeat(${columnas.length}, 1fr)`,gridAutoRows: "minmax(20px, 75px)"}}>
        {
            columnas.map((column)=>{
                return(
                    <div className="h-fit px-4">
                        <h1 className="font-semibold h-fit text-start">{column}</h1>
                    </div>
                )
            })
        }
        {
            data.map((registro,index)=>{
                const fecha = new Date(registro.fecha_creacion)
                const dia = fecha.getDate()
                const mes = fecha.getMonth() + 1
                const anio = fecha.getFullYear()
                if(index % 2 === 0){
                    return(
                        <>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">{registro.id}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start "><h1 className="font-semibold text-xs">{dia} - {mes} - {anio}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">{registro.proveedor_id}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">{registro.proveedor_nombre}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${registro.total}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${registro.iva}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${registro.ieps}</h1></div>
                            <div className="bg-[#78de7e25] px-2 text-start"><h1 className="font-semibold text-xs">${registro.total}</h1></div>
                        </>
                        )
                }else{
                    return(
                        <>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{registro.id}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{dia} - {mes} - {anio}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{registro.proveedor_id}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">{registro.proveedor_nombre}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${registro.total}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${registro.iva}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${registro.ieps}</h1></div>
                            <div className="px-2 text-start"><h1 className="font-semibold text-xs">${registro.total}</h1></div>
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