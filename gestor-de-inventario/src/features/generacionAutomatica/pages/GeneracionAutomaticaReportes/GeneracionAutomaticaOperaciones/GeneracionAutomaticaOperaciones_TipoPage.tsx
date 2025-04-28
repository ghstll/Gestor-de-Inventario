import { useNavigate } from "react-router-dom"
import AsideMenu from "../../../../../shared/components/AsideMenu/AsideMenu"
export default function GeneracionAutomaticaOperaciones_TipoPage() {

    const nav = useNavigate()

  return (
    <div className="flex box-border h-screen">
    <AsideMenu></AsideMenu>
    <main className="w-full h-full flex justify-center p-1 bg-gray-200">
        <div className="border border-black w-[70%] rounded-lg p-5 bg-white overflow-auto scrollbarclass">
            <div className="p-5 flex items-center font-bold text-lg ml-10 gap-2">
                <h1  className="cursor-pointer" onClick={()=> nav(-1)}>
                    Ajustes de automatizacion
                </h1>
                <h1>&rarr;</h1>
                <h1 className='cursor-pointer'>Operaciones</h1>
            </div>
            <hr />
            <section className="w-full h-fit flex flex-col items-center mt-10 gap-5 ">
                {/* <GeneracionAutomaticaTipo icon={AnaliticosIcon} title="Analiticos" description="Configurar la automatizacion para los reportes Analiticos" color="#ffa9b9" onClickFunc={()=>nav("analiticos")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={ResumenIcon} title="Resumenes" description="Configurar la automatizacion para los reportes de Resumenes" color="#ffa9b9" onClickFunc={()=>nav("resumenes")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={VentasIcon} title="Ventas" description="Configurar la automatizacion para los reportes de Ventas" color="#ffa9b9" onClickFunc={()=>nav("ventas")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={ExistenciasIcon} title="Existencias" description="Configurar la automatizacion para los reportes de Existencias" color="#fcd5bd" onClickFunc={()=>nav("existencias")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={MovimientosIcon} title="Movimientos" description="Configurar la automatizacion para los reportes de Movimientos" color="#f2ffbf" onClickFunc={()=>nav("movimientos")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={ArticulosIcon} title="Articulos" description="Configurar la automatizacion para los reportes de Articulos" color="#d9e99e" onClickFunc={()=>nav("articulos")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={ArticulosGranelIcon} title="Articulos a granel" description="Configurar la automatizacion para los reportes de Articulos a granel" color="#c0d27e" onClickFunc={()=>nav("articulos_a_granel")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={ProveedoresIcon} title="Proveedores" description="Configurar la automatizacion para los reportes de Proveedores" color="#ffa9b9" onClickFunc={()=>nav("proveedores")}></GeneracionAutomaticaTipo>
                <GeneracionAutomaticaTipo icon={CambiosPrecioIcon} title="Cambios de precio" description="Configurar la automatizacion para los reportes de Cambios de precio" color="#ffa9b9" onClickFunc={()=>nav("cambios_de_precio")}></GeneracionAutomaticaTipo> */}
            </section>
        </div>
    </main>
</div>
  )
}