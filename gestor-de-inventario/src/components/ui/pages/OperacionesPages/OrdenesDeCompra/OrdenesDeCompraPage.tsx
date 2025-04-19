import FormParamsReportContainer from "../../../FormParamsReport/FormParamsReportContainer";
import FormParamsReportDateRange from "../../../FormParamsReport/FormParamsReportDateRange";
import FormParamsReportDepartamento from "../../../FormParamsReport/FormParamsReportDepartamento";
import FormParamsReportEstado from "../../../FormParamsReport/FormParamsReportEstado";
import FormParamsReportFolioRange from "../../../FormParamsReport/FormParamsReportFolioRange";
import FormParamsReportProveedor from "../../../FormParamsReport/FormParamsReportProveedor";

import AsideMenu from "../../../AsideMenu/AsideMenu";





function OrdenesDeCompraPage() {
    return (
        <div className="flex box-border h-screen">
            <AsideMenu></AsideMenu>
            <main
                className="overflow-auto h-full w-full flex gap-8  justify-center p-4 sbg-white text-black duration-700">
                <FormParamsReportContainer TitleContainer="Ordenes de compra">
                    <FormParamsReportFolioRange></FormParamsReportFolioRange>
                    <FormParamsReportDateRange></FormParamsReportDateRange>
                    <FormParamsReportProveedor></FormParamsReportProveedor>
                    <FormParamsReportDepartamento></FormParamsReportDepartamento>
                    <FormParamsReportEstado></FormParamsReportEstado>
                </FormParamsReportContainer>
            </main>
        </div>
    );  
}

export default OrdenesDeCompraPage; 
    