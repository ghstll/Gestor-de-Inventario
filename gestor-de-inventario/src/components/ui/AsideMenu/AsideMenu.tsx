//Iconos (SVG) de los botones del AsideMenu
import AjustarIcon from '../../../assets/AjustarIcon.svg';
import AnaliticosIcon from '../../../assets/AnaliticosIcon.svg';
import ArticulosAGranelIcon from '../../../assets/ArticulosAGranelIcon.svg';
import ArticulosIcon from '../../../assets/ArticulosIcon.svg';
import CambiarContraseñaIcon from '../../../assets/CambiarContraseñaIcon.svg';
import CambiosDePrecioIcon from '../../../assets/CambiosDePrecioIcon.svg';
import CapturarInventarioFisicoIcon from '../../../assets/CapturarInventarioFisicoIcon.svg';
import ConsultarIcon from '../../../assets/ConsultarIcon.svg';
import ConsultarKardexIcon from '../../../assets/ConsultarKardexIcon.svg';
import DevolucionesIcon from '../../../assets/DevolucionesIcon.svg';
import ExistenciasIcon from '../../../assets/ExistenciasIcon.svg';
import FisicoKardexIcon from '../../../assets/FisicoKardexIcon.svg';
import HistoricoIcon from '../../../assets/HistoricoIcon.svg';
import InicioIcon from '../../../assets/home.svg';
import InventarioTeoricoIcon from '../../../assets/InventarioTeoricoIcon.svg';
import MermasIcon from '../../../assets/MermasIcon.svg';
import MoonIcon from '../../../assets/moon.svg';
import MovimientosIcon from '../../../assets/MovimientosIcon.svg';
import OrdenesDeCompraIcon from '../../../assets/OrdenesDeCompraIcon.svg';
import PolizaContableIcon from '../../../assets/PolizaContableIcon.svg';
import ProveedoresIcon from '../../../assets/ProveedoresIcon.svg';
import RecepcionesIcon from '../../../assets/RecepcionesIcon.svg';
import RegistrarIcon from '../../../assets/RegistrarIcon.svg';
import ResumenIcon from '../../../assets/ResumenIcon.svg';
import BotIcon from '../../../assets/robot.svg';
import SiniestrosIcon from '../../../assets/SiniestrosIcon.svg';
import TransferenciasIcon from '../../../assets/TransferenciasIcon.svg';
import VentasIcon from '../../../assets/VentasIcon.svg';
//************************************************************************* */

import '../../../index.css';

import AsideMenuButton from "./AsideMenuButton";
import AsideMenuSection from "./AsideMenuSection"; //Importamos el componente AsideMenuSection
export default function AsideMenu({toggleDarkMode , setCurrentPage ,darkMode} : {toggleDarkMode : () => void,setCurrentPage : (page : string ) => void  ,darkMode : boolean}){ 
    return( 
        <aside className={`h-screen w-[280px] flex flex-col gap-10 overflow-auto pt-5 pb-6 asidemenu ${darkMode ? "bg-black text-white border-r border-white" : "bg-[#154f3a] border-r border-transparent"} duration-700`}> 
            {/* Contenedor aside que contendra  */}
            <AsideMenuSection title="MODULO SUCURSAL">
                <AsideMenuButton onClickFunc={() => setCurrentPage('Inicio')} darkMode = {darkMode} text="Inicio" icon = {InicioIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="OPERACIONES">
                <AsideMenuButton onClickFunc={() => setCurrentPage('OrdenesDeCompra')} darkMode = {darkMode} text="Ordenes de compra" icon = {OrdenesDeCompraIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Recepciones" icon = {RecepcionesIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Devoluciones" icon = {DevolucionesIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Mermas" icon = {MermasIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Siniestros" icon = {SiniestrosIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Transferencias" icon = {TransferenciasIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="VENTAS">
                <AsideMenuButton darkMode = {darkMode} text="Registrar" icon = {RegistrarIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Consultar" icon = {ConsultarIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Ajustar" icon = {AjustarIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="KARDEX">
                <AsideMenuButton darkMode = {darkMode} text="Consultar kardex" icon = {ConsultarKardexIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Inventario teorico" icon = {InventarioTeoricoIcon}></AsideMenuButton>
            </AsideMenuSection> 
            
            
            <AsideMenuSection title="INVENTARIO FISICO">
                <AsideMenuButton darkMode = {darkMode} text="Capturar inventario fisico" icon = {CapturarInventarioFisicoIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Historico" icon = {HistoricoIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Fisico VS Kardex" icon = {FisicoKardexIcon}></AsideMenuButton>
            </AsideMenuSection>     
            
            <AsideMenuSection title="POLIZAS">
                <AsideMenuButton darkMode = {darkMode} text="Poliza contable" icon = {PolizaContableIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="REPORTES">
                <AsideMenuButton darkMode = {darkMode} text="Analiticos" icon = {AnaliticosIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Resumens" icon = {ResumenIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Ventas" icon = {VentasIcon}></AsideMenuButton>           
                <AsideMenuButton darkMode = {darkMode} text="Existencias" icon = {ExistenciasIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Movimientos" icon = {MovimientosIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Articulos" icon = {ArticulosIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Articulos a granel" icon = {ArticulosAGranelIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Proveedores" icon = {ProveedoresIcon}></AsideMenuButton>
                <AsideMenuButton darkMode = {darkMode} text="Cambios de precio" icon = {CambiosDePrecioIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="MI CUENTA">
                <AsideMenuButton darkMode = {darkMode} text="Cambiar contraseña" icon = {CambiarContraseñaIcon}></AsideMenuButton>
            </AsideMenuSection>
            <AsideMenuSection title='Preferencia'>
                <AsideMenuButton darkMode = {darkMode} onClickFunc={toggleDarkMode} text='Modo Oscuro ' icon={MoonIcon}></AsideMenuButton>
                <AsideMenuButton onClickFunc={() => {setCurrentPage('GeneracionAutomatica')}} text='Generacion Automatica' icon={BotIcon} darkMode = {darkMode}></AsideMenuButton>
            </AsideMenuSection>
        
        </aside>     
        
    )   
}   