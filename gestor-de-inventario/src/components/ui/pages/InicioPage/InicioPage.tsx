import ActividadReciente from "../../ChartComps/Dashboard/ActividadReciente";
import BarChartD from "../../ChartComps/Dashboard/BarChartD";
import ProductosAgotados from "../../ChartComps/Dashboard/SectionSmallComps/ProductosAgotados";
import Ventas from "../../ChartComps/Dashboard/Ventas";
export default function InicioPage() {
    return (
        <main className="h-full w-full flex p-5 flex-col gap-5">
            <div className="h-full w-full flex gap-5">
                <div className="w-[65%] flex flex-col gap-5">
                    <section className="w-full flex gap-4">
                        <Ventas></Ventas>
                        <Ventas></Ventas>
                        <Ventas></Ventas>
                        <Ventas></Ventas>   
                        <ProductosAgotados></ProductosAgotados>
                    </section>
                    <section className="flex">
                        <BarChartD></BarChartD>
                        <article></article>
                    </section>
                </div>
                <div className="w-[35%] flex flex-col">     
                    <ActividadReciente></ActividadReciente>
                </div>
            </div>
        </main>
    );
}
