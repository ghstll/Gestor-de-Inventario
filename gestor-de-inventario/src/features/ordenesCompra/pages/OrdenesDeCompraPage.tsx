import { useState } from "react";
import eventosOrdenesCompraData from '../../../data/json_files/test/eventosOrdenesCompra.json';
import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";
import FormParamsReportContainer from "../../../shared/components/UI/FormParamsReportContainer";
import FormParamsReportDateRange from "../../../shared/components/UI/FormParamsReportDateRange";
import FormParamsReportDepartamento from "../../../shared/components/UI/FormParamsReportDepartamento";
import FormParamsReportEstado from "../../../shared/components/UI/FormParamsReportEstado";
import FormParamsReportFolioRange from "../../../shared/components/UI/FormParamsReportFolioRange";
import FormParamsReportProveedor from "../../../shared/components/UI/FormParamsReportProveedor";
import CalendarComp from "../../dashboard/components/CalendarComp";
import OrdenesCompraMesGrafica from "../components/OrdenesCompraMesGrafica";
import OrdenesCompraProductosBajoStock from "../components/OrdenesCompraProductosBajoStock";
import OrdenesCompraRecientes from "../components/OrdenesCompraRecientes";

function OrdenesDeCompraPage() {
    const [eventosData,setEventosData]  = useState([])

    // async function getEventosOrdenesDeCompraData(){
    //   try {
    //     const response = await fetch('http://localhost:3001/api/eventos/ordenescompra')
    //     const  data = await response.json()
    //     setEventosData(data)
    //   } catch (error) {
    //     console.log("Error al obtener los eventos: ",error)
    //   }
    // }getEventosOrdenesDeCompraData()
    
    
    return (
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main className="overflow-auto h-full w-full flex gap-4 flex-col  p-4 bg-gray-200 text-black duration-700">
                <section className="flex w-full justify-end">
                    <button className="border border-black p-2 rounded-md font-semibold bg-green-800 text-white hover:bg-green-700 duration-700">
                        Nueva orden de compra
                    </button>
                </section>
                <section className="flex gap-2 ">
                    <div className="w-[60%] h-full flex flex-col gap-3">
                        <div className="w-full">
                            <FormParamsReportContainer TitleContainer="Ordenes de compra">
                                <FormParamsReportFolioRange></FormParamsReportFolioRange>
                                <FormParamsReportDateRange></FormParamsReportDateRange>
                                <FormParamsReportProveedor></FormParamsReportProveedor>
                                <FormParamsReportDepartamento></FormParamsReportDepartamento>
                                <FormParamsReportEstado></FormParamsReportEstado>
                            </FormParamsReportContainer>
                        </div>
                        <div className="w-full min-h-[200px] max-h-full">
                            <OrdenesCompraMesGrafica></OrdenesCompraMesGrafica>
                        </div>
                        <div className="flex gap-2 h-full">
                                <OrdenesCompraRecientes></OrdenesCompraRecientes>
                                <OrdenesCompraProductosBajoStock></OrdenesCompraProductosBajoStock>
                        </div>
                    </div>
                    <div className="w-[40%] h-full">
                        {<CalendarComp dia={eventosOrdenesCompraData}></CalendarComp>}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default OrdenesDeCompraPage;
