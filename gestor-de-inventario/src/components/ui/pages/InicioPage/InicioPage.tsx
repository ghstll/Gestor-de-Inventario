import "../../../../index.css";
import ActividadReciente from "../../ChartComps/Dashboard/ActividadReciente";
import BarChartD from "../../ChartComps/Dashboard/BarChartD";
import MovimientosSemanales from "../../ChartComps/Dashboard/SectionSmallComps/MovimientosSemanales";
import Ventas from "../../ChartComps/Dashboard/Ventas";

export default function InicioPage({ darkMode }: { darkMode: boolean }) {
    return (
        <main
            className={`h-full w-full flex p-5 flex-col gap-5 overflow-auto ${darkMode ? "bg-black duration-700" : "bg-white duration-700"}`}>
            <section className="flex gap-4 max-h-[450px]">
                <div className="flex flex-col gap-2 w-[70%]">
                    <div  className="flex gap-1 overflow-auto h-[150px]" id="section-comps ">
                        <Ventas darkMode={darkMode}></Ventas>
                        <Ventas darkMode={darkMode}></Ventas>
                        <Ventas darkMode={darkMode}></Ventas>
                        <Ventas darkMode={darkMode}></Ventas>
                    </div>
                    <div>
                        <BarChartD darkMode={darkMode}></BarChartD>
                    </div>
                </div>
                <div className=" w-[30%] h-full">
                    <ActividadReciente darkMode = {darkMode}></ActividadReciente>
                </div>
            </section>
            <section className="w-full h-[250px]">
                <MovimientosSemanales darkMode={darkMode}></MovimientosSemanales>
            </section>
        </main>
    );
}
