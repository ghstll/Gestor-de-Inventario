import icon from '../../../shared/assets/icons/database.svg';

interface Proveedor{
    id : number | undefined;
    nombre : string | undefined;
    contacto : string | undefined;
    telefono : string | undefined;
    email : string | undefined;
    direccion : string | undefined;
}

interface props{
    proveedor : Proveedor | undefined
}

export default function DatosProveedor({proveedor} : props) {

    return (
        <section className="border border-white rounded-md p-4 gap-1 text-white flex flex-col items-center">
            <div className='flex items-center gap-2'>
                <h1 className="font-bold text-lg">Datos del proveedor</h1>
                <img src={icon} alt="" />
            </div>
            <hr className="w-full"/>
            <div className='flex items-center gap-3'>
                <h1 className='font-bold'>Nombre:</h1>
                <h1 className='font-thin'>{proveedor?.nombre}</h1>
            </div>
            <div className='flex items-center gap-3'>
                <h1 className='font-bold'>Contacto:</h1>
                <h1 className='font-thin'>{proveedor?.contacto}</h1>
            </div>
            <div className='flex items-center gap-3'>
                <h1 className='font-bold'>Telefono:</h1>
                <h1 className='font-thin'>{proveedor?.telefono}</h1>
            </div>
            <div className='flex items-center gap-3'>
                <h1 className='font-bold'>Email:</h1>
                <h1 className='font-thin'>{proveedor?.email}</h1>
            </div>
            <div className='flex items-ce nter gap-3'>
                <h1 className='font-bold'>Direccion:</h1>
                <h1 className='font-thin'>{proveedor?.direccion}</h1>
            </div>
        </section>
    )
}