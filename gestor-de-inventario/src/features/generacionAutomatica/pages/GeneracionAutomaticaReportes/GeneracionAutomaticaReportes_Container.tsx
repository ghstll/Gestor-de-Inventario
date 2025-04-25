interface Props {
  tipoReporte: "Analiticos" | "Resumenes" | "Ventas" | "Existencias" | "Movimientos" | "Articulos" | "Articulos a granel" | "Proveedores" | "Cambios de precio";
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AsideMenu from "../../../../shared/components/AsideMenu/AsideMenu";
import GeneracionAutomaticaCard from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaCard";


interface ReporteConfig {
  id: number;
  nombre: string;
  operacion: string; // Esto puede ser "Analiticos", "Resumenes", etc.
  fecha_inicial: string; // Puede ser tipo Date en lugar de string si quieres trabajar con objetos Date
  fecha_final: string; // También puede ser un Date si prefieres
  cron_horario: string; // El cron job en formato de texto
  activo: boolean;
  formatos_salida: string[]; // Array de formatos como 'PDF', 'Excel', etc.
  destinatarios: string[]; // Lista de destinatarios
  creado_en: string; // Fecha en formato string, o puedes usar Date si lo conviertes
  actualizado_en: string; // Fecha en formato string o Date
}


export default function GeneracionAutomaticaReportes_Container({...props}: Props) {

  const [dataReportesConfig,setDataReportesConfig] = useState<ReporteConfig[]>([])


  const nav = useNavigate()



  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/confautoreportes/analiticos");
      const data = await response.json()
      console.log(data)
      setDataReportesConfig(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(dataReportesConfig)
  return (
    <div className="flex box-border h-screen">
		<AsideMenu></AsideMenu>
			<main className="w-full h-full flex justify-center p-1 bg-gray-200">
				<div className="border border-black w-[70%] rounded-lg p-5 bg-white overflow-auto scrollbarclass">
          <div className="p-5 flex items-center font-bold text-lg ml-10 gap-2">
              <h1 onClick={()=> nav(-2)} className="cursor-pointer">Ajustes de automatizacion</h1>
              <h1>&rarr;</h1> {/* Fixed the arrow entity */}
              <h1 onClick={() => nav(-1)} className='cursor-pointer'>Reportes</h1>
              <h1>&rarr;</h1> {/* Fixed the arrow entity */}
              <h1 className='cursor-pointer'>{props.tipoReporte}</h1>
          </div>
          <hr />
          <section className="w-full h-fit flex flex-col items-center mt-10 gap-5 ">
              {
                props.tipoReporte === "Analiticos" ? 
                (
                  dataReportesConfig.map((confReporteAnalitico)=>{
                    return(
                      <GeneracionAutomaticaCard activo = {confReporteAnalitico.activo} title={confReporteAnalitico.nombre} destinatarios={confReporteAnalitico.destinatarios} formatos={confReporteAnalitico.formatos_salida}></GeneracionAutomaticaCard>
                    )
                  })
                )
                : ( 
                  <div></div>
                )
              }
            </section>
          </div>
      </main>
    </div>
  )
}   