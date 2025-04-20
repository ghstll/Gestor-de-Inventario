import "../../../app/index.css";
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import ActividadReciente from "../components/ActividadReciente";
import BarChartD from "../components/BarChartD";
import MovimientosSemanales from "../components/MovimientosSemanales";
import Ventas from "../components/Ventas";


const frasesBienvenida = [
    "¡Bienvenido de nuevo! Tu inventario te está esperando.",
    "Todo listo para comenzar tu jornada. ¡Gestionemos juntos!",
    "Tus productos están en buenas manos. ¿Listo para revisar?",
    "Hola 👋 ¿Qué querés hacer hoy en el sistema?",
    "Gestión eficiente comienza con un buen inicio. ¡Bienvenido!",
    "¡Es un buen día para optimizar tu inventario!",
    "Control total al alcance de un clic. ¡Vamos allá!",
    "¡Hola! Gracias por confiar en nuestro sistema.",
    "¿Problemas con el stock? Estamos para ayudarte.",
    "Bienvenido al panel. Tu inventario, tus reglas.",
    "Tu operación más ágil que nunca. ¡A trabajar!",
    "¡Listo para revisar existencias y movimientos!",
    "El orden comienza aquí. Bienvenido al sistema.",
    "Seguimos cuidando tus productos como el primer día.",
    "Hola, administrador. ¡Es hora de tomar el control!"
  ];
  

export default function InicioPage() {
    return (
        <div className="flex box-border w-screen h-full">
            <AsideMenu></AsideMenu>
            <main className="w-screen h-full flex">
                <div className="flex w-full flex-col p-4">
                    <h1 className="font-semibold italic text-4xl ml-10">{frasesBienvenida[Math.floor(Math.random() * frasesBienvenida.length)]}</h1>
                    <div className="h-full w-full flex p-5 flex-col gap-5 overflow-auto">
                        <section className="flex gap-4 max-h-[450px]">
                            <div className="flex flex-col gap-2 w-[70%]">
                                <div  className="flex gap-1 overflow-auto w-full h-[150px]" id="section-comps ">
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
                    </div>
                </div>
            </main>
        </div>
    );
}
