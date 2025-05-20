interface props{
    setOpenModalAgregarNuevoProveedor : React.Dispatch<React.SetStateAction<boolean>>
    setOpenModalImportarExcel : React.Dispatch<React.SetStateAction<boolean>>

}

export default function Proveedores_Agregar_Form({...props } : props) {

    

    return (
    <section className="border boder-white w-[40%] h-fit rounded-md flex flex-col items-center justify-center gap-5 p-3">
        <button className="border border-white text-white p-2 rounded-md bg-green-700 hover:brightness-125 duration-500 w-fit"
            onClick={() => props.setOpenModalAgregarNuevoProveedor(true)}
            >Agregar nuevo proveedor manualmente</button>
        <div className="flex flex-col gap-3 items-center">
            <button className="border border-white text-white p-2 rounded-md bg-green-700 hover:brightness-125 duration-500 w-fit"
                onClick={() => props.setOpenModalImportarExcel(true)}
            >Importar proveedores de un archivo excel</button>
            <p className="text-white text-center italic">Nota :  Si se van a importar datos de un archivo Excel verificar que cada proveedor cuente con las siguientes columnas</p>
            <ul className="text-green-500 list-disc">
                <li>Nombre</li>
                <li>Contacto</li>
                <li>Teléfono</li>
                <li>Email</li>
                <li>Dirección</li>
            </ul>
        </div>
    </section>
  )
}       