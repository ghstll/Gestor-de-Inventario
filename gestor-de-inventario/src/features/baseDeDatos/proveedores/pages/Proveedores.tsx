import { useState } from "react"
import AsideMenu from "../../../../shared/components/AsideMenu/AsideMenu"
import ModalContainer from "../../../../shared/components/UI/ModalContainer"
import ProveedorAgregar from "../components/ProveedorAgregar"
import Proveedores_Agregar_Form from "../components/Proveedores_Agregar_Form"
import ProveedorImportarModal from "../components/ProveedorImportarModal"

export default function Proveedores() {


    const [openModalAgregarNuevoProveedor,setOpenModalAgregarNuevoProveedor] = useState<boolean>(false)
    const [openModalImportarExcel,setOpenModalImportarExcel] = useState<boolean>(false)

  return (
    <div className="flex box-border w-screen h-full">
            <AsideMenu notificacionesNuevas={0}></AsideMenu>
            <main className="w-screen h-full flex bg-black">
                <div className="flex w-full h-full p-4">
                    <Proveedores_Agregar_Form setOpenModalAgregarNuevoProveedor={setOpenModalAgregarNuevoProveedor} setOpenModalImportarExcel={setOpenModalImportarExcel}></Proveedores_Agregar_Form>
                </div>
            </main>
            {
                openModalImportarExcel && (
                    <ModalContainer setIsOpenModal={setOpenModalImportarExcel}>
                        <ProveedorImportarModal></ProveedorImportarModal>
                    </ModalContainer>
                )
            }
            {
                openModalAgregarNuevoProveedor && (
                    <ModalContainer setIsOpenModal={setOpenModalAgregarNuevoProveedor}>
                        <ProveedorAgregar></ProveedorAgregar>
                    </ModalContainer>
                )
            }
    </div>
  )
}