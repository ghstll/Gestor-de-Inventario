import FormParamsReportContainer from "../../../shared/components/UI/FormParamsReportContainer";
import FormParamsReportDateRange from "../../../shared/components/UI/FormParamsReportDateRange";
import FormParamsReportDepartamento from "../../../shared/components/UI/FormParamsReportDepartamento";
import FormParamsReportEstado from "../../../shared/components/UI/FormParamsReportEstado";
import FormParamsReportFolioRange from "../../../shared/components/UI/FormParamsReportFolioRange";
import FormParamsReportProveedor from "../../../shared/components/UI/FormParamsReportProveedor";

import AsideMenu from "../../../shared/components/AsideMenu/AsideMenu";





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
    