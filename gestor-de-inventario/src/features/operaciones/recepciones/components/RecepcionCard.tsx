import recepcionIcon from '../../../../shared/assets/icons/asideMenu/RecepcionesIcon.svg'
interface props{
    folio_recepcion : string
    fecha_esperada_entrega : string
    estado : string
    observaciones : string
    cantidad : 50
}
export default function RecepcionCard({folio_recepcion,fecha_esperada_entrega,estado,observaciones,cantidad} : props) {
    return (
        <section className='w-full p-3 bg-[#262731] rounded-md'>
            <div className='flex items-center gap-5'>
                <div className='border p-2 rounded-full'><img src={recepcionIcon} alt="" /></div>
                <h1>Folio : </h1>
                <h1 className='italic font-medium'>{folio_recepcion}</h1>
            </div>
            <div className='flex gap-1'>
                <h1>Fecha esperada de entrega : </h1>
                <h1 className='italic font-medium'>{fecha_esperada_entrega}</h1>
            </div>
            <div>
                <h1 className='font-bold italic'>{observaciones}</h1>
            </div>
            <div className='flex gap-3'>
                <h1>Cantidad a recibir : </h1>
                <h1 className='font-bold italic'>{cantidad} unidades</h1>
            </div>
        </section>
    )
}