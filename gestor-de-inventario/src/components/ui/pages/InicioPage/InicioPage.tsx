import "../../../../index.css";
import ActividadReciente from "../../ChartComps/Dashboard/ActividadReciente";
import BarChartD from "../../ChartComps/Dashboard/BarChartD";
import MovimientosSemanales from "../../ChartComps/Dashboard/SectionSmallComps/MovimientosSemanales";
import Ventas from "../../ChartComps/Dashboard/Ventas";

export default function InicioPage() {
    return (
        <main
            className="h-full w-full flex p-5 flex-col gap-5 overflow-auto bg-white duration-700">
            <section className="flex gap-4 max-h-[450px]">
                <div className="flex flex-col gap-2 w-[70%]">
                    <div  className="flex gap-1 overflow-auto h-[150px]" id="section-comps ">
                        <Ventas ></Ventas>
                        <Ventas ></Ventas>
                        <Ventas ></Ventas>
                        <Ventas ></Ventas>
                    </div>
                    <div>
                        <BarChartD></BarChartD>
                    </div>
                </div>
                <div className=" w-[30%] h-full">
                    <ActividadReciente></ActividadReciente>
                </div>
            </section>
            <section className="w-full h-[250px]">
                <MovimientosSemanales ></MovimientosSemanales>
            </section>
        </main>
    );
}
