interface props{
    nombre : string;
    contacto : string;
    telefono : string;
    email : string;
    direccion : string
}
export default function ProveedorAgregarCard({nombre,contacto,telefono,email,direccion} : props) {
  return (
    <article className="text-white border border-white p-2 w-full h-fit rounded-md bg-gray-900">
        <div className="flex  gap-3 items-center">
            <h1 className="font-medium">Nombre del proveedor : </h1>
            <h1 className="italic">{nombre}</h1>
        </div>
        <div className="flex  gap-3 items-center">
            <h1 className="font-medium">Contacto del proveedor : </h1>
            <h1 className="italic">{contacto}</h1>
        </div>
        <div className="flex  gap-3 items-center">
            <h1 className="font-medium">Telefono del proveedor : </h1>
            <h1 className="italic">{telefono}</h1>
        </div>
        <div className="flex  gap-3 items-center">
            <h1 className="font-medium">Email del proveedor : </h1>
            <h1 className="italic">{email}</h1>
        </div>
        <div className="flex  gap-3 items-center">
            <h1 className="font-medium">Direccion del proveedor : </h1>
            <h1 className="italic">{direccion}</h1>
        </div>
    </article>
  )
}   