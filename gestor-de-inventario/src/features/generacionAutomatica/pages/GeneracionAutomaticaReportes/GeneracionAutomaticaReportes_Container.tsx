// --- Importaciones --- 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Componentes
import AsideMenu from "../../../../shared/components/AsideMenu/AsideMenu";
import GeneracionAutomaticaCard from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaCard";
import GeneracionAutomaticaConfiguracionWindow from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaConfiguracionWindow";
import GeneracionAutomaticaEstadoContainer from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaEstadoContainer";
import GeneracionAutomaticaNuevaConfig_Destinatarios from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaNuevaConfig_Comps/GeneracionAutomaticaNuevaConfig_Destinatarios";
import GeneracionAutomaticaNuevaConfig_Formatos from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaNuevaConfig_Comps/GeneracionAutomaticaNuevaConfig_Formatos";
import GeneracionAutomaticaNuevaConfig_Nombre from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaNuevaConfig_Comps/GeneracionAutomaticaNuevaConfig_Nombre";
import GeneracionAutomaticaNuevaConfig_Operacion from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaNuevaConfig_Comps/GeneracionAutomaticaNuevaConfig_Operacion";
import GeneracionAutomaticaNuevaConfig_Periodicidad from "../../../../shared/components/UI/generacionAutomatica/GeneracionAutomaticaNuevaConfig_Comps/GeneracionAutomaticaNuevaConfig_Periodicidad";
import ModalContainer from "../../../../shared/components/UI/ModalContainer";

// Estilos
import "../../../../shared/scrollbarcss.css";

// --- Interfaces --- 
interface Props {
    tipoReporte: "Analiticos" 
                | "Resumenes" 
                | "Ventas" 
                | "Existencias" 
                | "Movimientos" 
                | "Articulos" 
                | "Articulos a granel" 
                | "Proveedores" 
                | "Cambios de precio";
}

interface ReporteConfig { //Interfaz que dicta la estructura que el llamado a la API recibira como respuesta
    id: number;
    nombre: string;
    operacion: string;
    fecha_inicial: Date;
    fecha_final: Date;
    periodicidad_dias: number;
    activo: boolean;
    formatos_salida: string[];
    destinatarios: string[];
    creado_en: string;
    actualizado_en: string;
}

// --- Componente Principal --- 
const GeneracionAutomaticaReportes_Container = ({ tipoReporte }: Props) => {

    // --- Estados para modales ---     
    const [isOpenModal, setIsOpenModal] = useState(false); //Estado para manejar la apertura del modal al dar click en una card
    const [isOpenModalNuevaConfiguracion, setIsOpenModalNuevaConfiguracion] = useState(false); //Estado para manejar la apertura del modal al dar click en agregar nueva configuracion

    // --- Estados para manejar datos --- 
    const [dataReportesConfig, setDataReportesConfig] = useState<ReporteConfig[]>([]); //Estado para guardar la data de la respuesta de la llamada a la API
    const [reloadData, setReloadData] = useState<boolean>(false); //Estado para recargar la informacion por si se agrega,actualiza,elimina alguna configuracion

    // --- Estado para manejar selección de tarjeta --- 
    const [idSelectedCard, setIdSelectedCard] = useState<number>(0); // Estado para almacenar la ID de la card que seleccionamos

    // --- Estados para nueva configuración --- 
    const [nombreConfiguracion, setNombreConfiguracion] = useState<string>("");
    const [operacionConfiguracion, setOperacionConfiguracion] = useState<string>("");
    const [fechaInicial, setFechaInicial] = useState<Date>(new Date());
    const [fechaFinal, setFechaFinal] = useState<Date>(new Date());
    const [periodicidadDias, setPeriodicidadDias] = useState<number>(0);
    const [activo,setActivo] = useState<boolean>(true)
    const [formatosSalida, setFormatosSalida] = useState<string[]>([]);
    const [destinatarios, setDestinatarios] = useState<string[]>([]);
    
    
    const selectedObj = dataReportesConfig.find((item) => item.id === idSelectedCard) || null; //Obtenemos la informacion de la tarjeta que seleccionamos

    //-- Estados para la informacion que se usara en el form
    
   
    // --- Función para obtener datos del servidor --- 
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/confautoreportes/analiticos");
            const data = await response.json();
            setDataReportesConfig(data);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

     // --- useEffect para cargar los datos al inicio --- 
     useEffect(() => {
        fetchData();
    }, [reloadData]);

    // --- useEffect para limpiar estados cuando se abre nueva configuración --- 
    useEffect(() => {
        setNombreConfiguracion("");
        setOperacionConfiguracion("");
        setFechaInicial(new Date());
        setFechaFinal(new Date());
        setActivo(true)
        setPeriodicidadDias(0);
        setFormatosSalida([]);
        setDestinatarios([]);
    }, [isOpenModalNuevaConfiguracion]);

    
 //useEffect para modificar una configuracion
    useEffect(() =>{
        if(isOpenModal && selectedObj){
            if (selectedObj) {
                setNombreConfiguracion(selectedObj.nombre || "");
                setOperacionConfiguracion(selectedObj.operacion || "");
                setFechaInicial(selectedObj.fecha_inicial || new Date());
                setActivo(selectedObj?.activo || true)
                setFechaFinal(selectedObj.fecha_final || new Date());
                setPeriodicidadDias(selectedObj.periodicidad_dias || 0);
                setFormatosSalida(selectedObj.formatos_salida || []);
                setDestinatarios(selectedObj.destinatarios || []);
            }
        }else{
            setNombreConfiguracion("");
            setOperacionConfiguracion("");
            setFechaInicial(new Date());
            setActivo(true)
            setFechaFinal(new Date());
            setPeriodicidadDias(0);
            setFormatosSalida([]);
            setDestinatarios([]);
        }
    },[isOpenModal])
    
    // --- Configuración para la nueva configuración --- 
    const objParamsNuevaConfig = {
        windowsConfig: {
            titleWindow: "Nueva configuración",
            children: (
                <>
                    <GeneracionAutomaticaNuevaConfig_Nombre loadNombre={nombreConfiguracion || ""} setNombreConfiguracion={setNombreConfiguracion} />
                    <GeneracionAutomaticaNuevaConfig_Operacion loadOperacion={operacionConfiguracion || ""} setOperacionConfiguracion={setOperacionConfiguracion} />
                    <GeneracionAutomaticaNuevaConfig_Destinatarios loadDestinatarios={destinatarios || []} setDestinatarios={setDestinatarios} />
                    <GeneracionAutomaticaNuevaConfig_Formatos loadFormatos={formatosSalida || []} setFormatos={setFormatosSalida} />
                    <GeneracionAutomaticaNuevaConfig_Periodicidad
                        loadFechaFinal={fechaFinal || new Date()}
                        loadFechaInicial={fechaInicial || new Date()}
                        loadPeriodicidadDias={periodicidadDias || 0}
                        setFechaFinal={setFechaFinal}
                        setFechaInicial={setFechaInicial}
                        setPeriodicidadDias={setPeriodicidadDias}
                    />
                </>
            ),
            tipo: 0,
            setIsOpenModal: setIsOpenModalNuevaConfiguracion,
            fetchData: fetchData,
        },
        formData: {
            id: idSelectedCard,
            nombreConfig: nombreConfiguracion,
            operacion: operacionConfiguracion,
            periodicidad_dias: periodicidadDias,
            activo : activo,            
            fecha_inicial: fechaInicial,
            fecha_final: fechaFinal,
            formatos_salida: formatosSalida,
            destinatarios: destinatarios,
        },
    };

    // --- Configuración para modificar configuración --- 
    const objParamsModificarConfig =  {
        windowsConfig: {
            titleWindow: `Modificar configuración de: ${selectedObj?.nombre}`,
            children: (
                <>
                    <GeneracionAutomaticaNuevaConfig_Nombre loadNombre={nombreConfiguracion || ""} setNombreConfiguracion={setNombreConfiguracion} />
                    <GeneracionAutomaticaNuevaConfig_Operacion loadOperacion={operacionConfiguracion || ""} setOperacionConfiguracion={setOperacionConfiguracion} />
                    <GeneracionAutomaticaNuevaConfig_Destinatarios loadDestinatarios={destinatarios || []} setDestinatarios={setDestinatarios} />
                    <GeneracionAutomaticaNuevaConfig_Formatos loadFormatos={formatosSalida || []} setFormatos={setFormatosSalida} />
                    <GeneracionAutomaticaNuevaConfig_Periodicidad
                        loadFechaFinal={fechaFinal || new Date()}
                        loadFechaInicial={fechaInicial || new Date()}
                        loadPeriodicidadDias={periodicidadDias || 0}
                        setFechaFinal={setFechaFinal}
                        setFechaInicial={setFechaInicial}
                        setPeriodicidadDias={setPeriodicidadDias}
                    />
                </>
            ),
            tipo: 1,
            setIsOpenModal: setIsOpenModalNuevaConfiguracion,
            setActivo : setActivo,
            fetchData: fetchData,
        },
        formData: {
            id: idSelectedCard,
            nombreConfig: nombreConfiguracion,
            operacion: operacionConfiguracion,
            periodicidad_dias: periodicidadDias,
            activo : activo,            
            fecha_inicial: fechaInicial,
            fecha_final: fechaFinal,
            formatos_salida: formatosSalida,
            destinatarios: destinatarios,
        },
    };

    // --- Hook de navegación --- 
    const nav = useNavigate();

   

    // --- Renderizado --- 
    return (
        <div className="flex box-border h-screen">
            {/* Menú lateral */}
            <AsideMenu notificacionesNuevas={3}/>

            {/* Contenido principal */}
            <main className="w-full h-full flex justify-center p-1 bg-black">
                <div className="border border-white w-[85%] rounded-lg p-5 bg-black overflow-auto scrollbarclass text-white">
                    
                    {/* Navegación de encabezado */}
                    <div className="flex justify-between items-center">
                        <div className="p-5 flex items-center font-bold text-lg ml-10 gap-2">
                            <h1 onClick={() => nav(-2)} className="cursor-pointer">Ajustes de automatización</h1>
                            <h1>&rarr;</h1>
                            <h1 onClick={() => nav(-1)} className="cursor-pointer">Reportes</h1>
                            <h1>&rarr;</h1>
                            <h1 className="cursor-pointer">{tipoReporte}</h1>
                        </div>
                        <button
                            className="border border-black p-2 rounded-md bg-green-600 hover:brightness-110 duration-200"
                            onClick={() => setIsOpenModalNuevaConfiguracion(!isOpenModalNuevaConfiguracion)}
                        >
                            Agregar nueva configuración
                        </button>
                    </div>

                    <hr className="border border-white"/>

                    {/* Reportes activos */}
                    <GeneracionAutomaticaEstadoContainer estado="Activos">
                        {tipoReporte === "Analiticos" && dataReportesConfig
                            .filter((conf) => conf.activo)
                            .map((conf) => (
                                <GeneracionAutomaticaCard
                                    key={conf.id}
                                    setIdSelected={setIdSelectedCard}
                                    setIsOpenModal={setIsOpenModal}
                                    isOpenModal={isOpenModal}
                                    id={conf.id}
                                    activo={conf.activo}
                                    title={conf.nombre}
                                    destinatarios={conf.destinatarios}
                                    formatos={conf.formatos_salida}
                                    fecha_final={new Date(conf.fecha_final)}
                                    fecha_inicial={new Date(conf.fecha_final)}
                                    periodicidadDias={conf.periodicidad_dias}
                                />
                            ))}
                    </GeneracionAutomaticaEstadoContainer>

                    {/* Reportes inactivos */}
                    <GeneracionAutomaticaEstadoContainer estado="Inactivos">
                        {tipoReporte === "Analiticos" && dataReportesConfig
                            .filter((conf) => !conf.activo)
                            .map((conf) => (
                                <GeneracionAutomaticaCard
                                    key={conf.id}
                                    setIdSelected={setIdSelectedCard}
                                    setIsOpenModal={setIsOpenModal}
                                    isOpenModal={isOpenModal}
                                    id={conf.id}
                                    activo={conf.activo}
                                    title={conf.nombre}
                                    destinatarios={conf.destinatarios}
                                    formatos={conf.formatos_salida}
                                    fecha_final={new Date(conf.fecha_final)}
                                    fecha_inicial={new Date(conf.fecha_final)}
                                    periodicidadDias={conf.periodicidad_dias}
                                />
                            ))}
                    </GeneracionAutomaticaEstadoContainer>
                </div>
            </main>

            {/* Modal de modificación */}
            {isOpenModal && selectedObj && (
                <ModalContainer setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal}>
                    <GeneracionAutomaticaConfiguracionWindow {...objParamsModificarConfig} />
                </ModalContainer>
            )}

            {/* Modal de nueva configuración */}
            {isOpenModalNuevaConfiguracion && (
                <ModalContainer setIsOpenModal={setIsOpenModalNuevaConfiguracion} isOpenModal={isOpenModalNuevaConfiguracion}>
                    <GeneracionAutomaticaConfiguracionWindow {...objParamsNuevaConfig} />
                </ModalContainer>
            )}
        </div>
    );
};
export default GeneracionAutomaticaReportes_Container;
