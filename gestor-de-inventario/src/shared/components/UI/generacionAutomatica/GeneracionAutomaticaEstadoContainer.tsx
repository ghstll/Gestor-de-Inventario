// Definimos las propiedades que el componente recibirá
interface Props {
    estado: string; // Estado que se mostrará como título
    children: React.ReactNode; // Elementos hijos que se renderizarán dentro del contenedor
}

// Componente funcional que recibe las propiedades definidas en la interfaz Props
export default function GeneracionAutomaticaEstadoContainer({ ...props }: Props) {
    return (
        <section className="w-full h-fit flex flex-col items-center mt-10 gap-5">
            {/* Contenedor principal que centra los elementos */}
            <div className="w-full flex justify-center items-center flex-col gap-6">
                {/* Contenedor para el título */}
                <div className="w-full flex justify-between items-center">
                    <h1 className="font-medium text-xl cursor-pointer">
                        {props.estado} {/* Muestra el estado recibido como propiedad */}
                    </h1>
                </div>
                {/* Contenedor para los elementos hijos */}
                <div className="w-full ps-5 flex flex-col gap-5">
                    {props.children} {/* Renderiza los elementos hijos */}
                    {/* Línea divisoria */}
                    <hr className="border-none bg-black h-[1px] w-full" />
                </div>
            </div>
        </section>
    );
}