import ventaIcon from '../../../shared/assets/icons/asideMenu/VentasIcon.svg';
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import "../../../shared/scrollbarcss.css";
import ComparacionVentasChart from "../components/ComparacionVentasChart";
import FastInfoCard from "../components/fastInfoCard";
import MovimientosSemanales from "../components/MovimientosSemanales";
import PedidosPorProveedor from "../components/PedidosPorProveedor";
// Functions
import ProductosBajoStock from "../components/ProductosBajoStock";
export default function InicioPage() {
    return (
        <div className="flex box-border w-screen h-full">
            <AsideMenu></AsideMenu>
            <main className="w-screen h-screen flex flex-col bg-[#141519] p-3 gap-6 overflow-y-auto scrollbarclass"  >
                <section className="p-1">
                    <h1 className="font-semibold italic text-xl ml-10 text-white">Panel de Control</h1>
                </section>
                <section className="grid grid-cols-2 gap-2">
                    <FastInfoCard title="Ventas del dia" value="12" percent={20.1} iconsvg={ventaIcon} description='Ventas realizadas' positive = {true}></FastInfoCard>
                    <FastInfoCard title="Devoluciones del mes" value="12" percent={20.1} iconsvg={ventaIcon} description='Devoluciones registradas' positive = {false}></FastInfoCard>
                    <FastInfoCard title="Reportes generados en el dia" value="12" percent={20.1} iconsvg={ventaIcon} description='Reportes realizados' positive = {false}></FastInfoCard>
                    <FastInfoCard title="Reportes generados en el dia" value="12" percent={20.1} iconsvg={ventaIcon} description='Reportes realizados' positive = {false}></FastInfoCard>
                </section>
                <section className="flex flex-wrap gap-5 h-fit w-full min-w-[400px]">
                    <ProductosBajoStock></ProductosBajoStock>
                </section>
                <section className="p-1">
                    <ComparacionVentasChart></ComparacionVentasChart>
                </section>
                <section className="flex flex-wrap gap-5 h-fit w-full min-w-[200px] ">
                    <MovimientosSemanales></MovimientosSemanales>
                    <PedidosPorProveedor></PedidosPorProveedor>
                </section>
            </main>
        </div>  
    );
}
