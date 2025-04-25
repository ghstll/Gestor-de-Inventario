import BotLogo from "../../../shared/assets/icons/asideMenu/robot.svg";
import UserLogo from "../../../shared/assets/icons/asideMenu/user.svg";
import '../../../shared/scrollbarcss.css';

import { useEffect, useState } from "react";
export default function ActividadReciente() {
    const [actividad, setActividad] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "http://localhost:3001/api/actividadreciente"
                );
                if (!response.ok) {
                    throw new Error("Error en tu solicitud de datos");
                }
                const data = await response.json();
                setActividad(data);
            } catch (error) {
                console.error("Error al obtener los datos");
            }
        }
        fetchData();
    }, []);



    const dataExample = [
        { usuario: "Manual", tipo_movimiento: "Reporte", fecha: "01-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "02-04-25" },
        { usuario: "Manual", tipo_movimiento: "Orden de compra", fecha: "03-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "04-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "04-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "05-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "05-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "06-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "06-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "07-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "07-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "07-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "08-04-25" },
        { usuario: "Automatizado", tipo_movimiento: "Reporte", fecha: "08-04-25" },
        { usuario: "Manual", tipo_movimiento: "Orden de compra", fecha: "09-04-25" },
        { usuario: "Manual", tipo_movimiento: "Orden de compra", fecha: "10-04-25" }
    ];
    
    

    return (
        <article
            className="border rounded-lg w-full h-full p-5 flex flex-col gap-3 overflow-auto border-black duration-700 text-black">
            <div>
                <h1
                    className="font-semibold text-xl border-black duration-700 text-black">
                    Movimientos Reciente
                </h1>
                <h2>Ultima actividad en el sistema : {dataExample.length} Movimientos</h2>
            </div>
            <div className="flex flex-col gap-4 overflow-auto scrollbarclass" >
                {dataExample.map((obj) => {
                    return (
                        <div className={`border cursor-pointer  border-black duration-700 rounded-2xl flex justify-between p-3 ${obj.usuario == "Manual"? "bg-[#bc9999]": "bg-[#4d4758]"}`}>
                            <div className="flex flex-col justify-center ">
                                <div className="flex items-center">
                                    <img
                                        src={
                                            obj.usuario == "Manual"
                                                ? UserLogo
                                                : BotLogo   
                                        }           
                                        alt=""
                                        width={25}
                                        height={25}
                                    />
                                    <h1>{obj.tipo_movimiento}</h1>
                                </div>
                                <h1>{obj.fecha}</h1>
                            </div>
                            <div className="flex items-center gap-3">
                                <h1 className="font-semibold text-base">
                                    {obj.usuario}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </article>
    );  
}
