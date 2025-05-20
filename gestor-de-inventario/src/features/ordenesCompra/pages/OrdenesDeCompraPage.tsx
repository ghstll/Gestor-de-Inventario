import { useEffect, useState } from "react";
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import ModalContainer from "../../../shared/components/UI/ModalContainer";
import FormParamsReportProveedor from "../../../shared/components/UI/ProveedoresSelect";
import FormParamsReportDateRange from "../../../shared/components/UI/RangoFecha";
import FormParamsReportFolioRange from "../../../shared/components/UI/RangoFolio";
import NuevaOrdenCompra from "../components/NuevaOrdenCompra";
import OrdenesCompraMesGrafica from "../components/OrdenesCompraMesGrafica";
import OrdenesCompraRecientes from "../components/OrdenesCompraRecientes";

// Componentes

import { getAllEventsOrdenesCompra } from "../../../backend/routes/api/functions/eventos/functions_eventos_ordenescompra";
import BotonesFormatos from "../../../shared/components/UI/BotonesFormatos";
import DepartamentosSelect from "../../../shared/components/UI/DepartamentosSelect";
import EstadoSelect from "../../../shared/components/UI/EstadoSelect";
import EventosContainer from "../../../shared/components/UI/eventos/EventosContainer";
import ResultadosContainer from "../../../shared/components/UI/ResultadosContainer";
import ProductosBajoStock from "../../dashboard/components/ProductosBajoStock";


// Interfaces
    // Interfaz para los datos de eventos
        interface evento{
            id : string
            id_orden_compra  : number
            fecha_evento : string
            tipo_evento : string
            usuario : string
            observaciones : string
            creado_en :string            
        }
        interface Estados{
            value : string;
            text : string;      
        }

export default function OrdenesDeCompraPage() {
    const estados : Estados[] = [
        {
            value : "pendiente",
            text : "Pendiente"
        },
        {
            value : "aprobada",
            text : "Aprobada"
        },
        {
            value : "parcialmente_recibida",
            text : "Parcialmente recibida"
        },
        {
            value : "completada",
            text : "Completada"
        },
        {
            value : "cancelada",
            text : "Cancelada"
        },
    ]
    const [eventosData,setEventosData]  = useState<evento[]>([])
    const [openNuevaOrdenCompra,setOpenNuevaOrdenCompra] = useState<boolean>(false)
    const loadPrimaryData = async () =>{
        const dataEvents = await getAllEventsOrdenesCompra()
        setEventosData(dataEvents)
    }
    useEffect(()=>{
        loadPrimaryData()
    },[])
    return (
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="overflow-auto h-full w-full flex gap-4 flex-col  p-4 bg-black text-black duration-700 scrollbarclass">
                <section className="flex w-full justify-between items-center">
                    <h1 className="text-white font-bold italic text-4xl">Ordenes de compra</h1>
                    {/* <button className="border border-black p-2 rounded-md font-semibold bg-green-600 text-black hover:brightness-150 duration-700" onClick={() => setOpenNuevaOrdenCompra(true)}>
                        Nueva orden de compra
                    </button> */}
                </section>
                <section className="flex gap-3 ">
                    <div className="flex flex-col gap-5 bg-[#1a1b22] p-3 rounded-md hover:brightness-125 duration-700">
                        <FormParamsReportFolioRange></FormParamsReportFolioRange>
                        <FormParamsReportDateRange></FormParamsReportDateRange>
                        <FormParamsReportProveedor></FormParamsReportProveedor>
                        <DepartamentosSelect></DepartamentosSelect>
                        <EstadoSelect estados={estados}></EstadoSelect>
                        <BotonesFormatos></BotonesFormatos>
                    </div>
                    <OrdenesCompraRecientes></OrdenesCompraRecientes>
                    {/* <CalendarComp title="Proximas ordenes de compra"></CalendarComp> */}
                </section>
                <section>
                    <ResultadosContainer></ResultadosContainer>
                </section>
                <section className="flex gap-3">
                    <OrdenesCompraMesGrafica></OrdenesCompraMesGrafica>
                </section>
                <section className="flex gap-3">
                    <ProductosBajoStock></ProductosBajoStock>
                </section>
                    <div className="w-[40%] h-full flex flex-col gap-3">
                        <EventosContainer data={eventosData} title="Eventos de Ordenes de Compra">
                        </EventosContainer>
                    </div>
            </main>
            {
                openNuevaOrdenCompra &&
                <ModalContainer setIsOpenModal={setOpenNuevaOrdenCompra}>
                    <NuevaOrdenCompra></NuevaOrdenCompra>
                </ModalContainer>
            }
        </div>
    );
}