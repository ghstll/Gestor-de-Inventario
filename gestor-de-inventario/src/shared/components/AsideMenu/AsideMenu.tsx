//Iconos (SVG) de los botones del AsideMenu
import { useNavigate } from 'react-router';
import AjustarIcon from '../../assets/icons/asideMenu/AjustarIcon.svg';
import AnaliticosIcon from '../../assets/icons/asideMenu/AnaliticosIcon.svg';
import ArticulosAGranelIcon from '../../assets/icons/asideMenu/ArticulosAGranelIcon.svg';
import ArticulosIcon from '../../assets/icons/asideMenu/ArticulosIcon.svg';
import NotificacionIcon from "../../assets/icons/asideMenu/bell.svg";
import CambiosDePrecioIcon from '../../assets/icons/asideMenu/CambiosDePrecioIcon.svg';
import CapturarInventarioFisicoIcon from '../../assets/icons/asideMenu/CapturarInventarioFisicoIcon.svg';
import ConsultarIcon from '../../assets/icons/asideMenu/ConsultarIcon.svg';
import ConsultarKardexIcon from '../../assets/icons/asideMenu/ConsultarKardexIcon.svg';
import DevolucionesIcon from '../../assets/icons/asideMenu/DevolucionesIcon.svg';
import ExistenciasIcon from '../../assets/icons/asideMenu/ExistenciasIcon.svg';
import FisicoKardexIcon from '../../assets/icons/asideMenu/FisicoKardexIcon.svg';
import HistoricoIcon from '../../assets/icons/asideMenu/HistoricoIcon.svg';
import InicioIcon from '../../assets/icons/asideMenu/home.svg';
import InventarioTeoricoIcon from '../../assets/icons/asideMenu/InventarioTeoricoIcon.svg';
import MermasIcon from '../../assets/icons/asideMenu/MermasIcon.svg';
import MovimientosIcon from '../../assets/icons/asideMenu/MovimientosIcon.svg';
import OrdenesDeCompraIcon from '../../assets/icons/asideMenu/OrdenesDeCompraIcon.svg';
import PolizaContableIcon from '../../assets/icons/asideMenu/PolizaContableIcon.svg';
import ProveedoresIcon from '../../assets/icons/asideMenu/ProveedoresIcon.svg';
import RecepcionesIcon from '../../assets/icons/asideMenu/RecepcionesIcon.svg';
import RegistrarIcon from '../../assets/icons/asideMenu/RegistrarIcon.svg';
import ResumenIcon from '../../assets/icons/asideMenu/ResumenIcon.svg';
import BotIcon from '../../assets/icons/asideMenu/robot2.svg';
import SiniestrosIcon from '../../assets/icons/asideMenu/SiniestrosIcon.svg';
import TransferenciasIcon from '../../assets/icons/asideMenu/TransferenciasIcon.svg';
import VentasIcon from '../../assets/icons/asideMenu/VentasIcon.svg';
//************************************************************************* */

import '../../../app/index.css';
import dataNotifications from "../../../data/json_files/notifications_data.json";

import AsideMenuButton from "./AsideMenuButton";
import AsideMenuSection from "./AsideMenuSection"; //Importamos el componente AsideMenuSection

import '../../../shared/scrollbarcss.css';


export default function AsideMenu(){ 

    const nav = useNavigate()

    return( 
        <aside className="h-screen w-[240px] min-w-[240px] flex flex-col gap-10 overflow-auto scrollbarclass  p-2  bg-[#154f3a] border-r border-transparent duration-700"> 
            {/* Contenedor aside que contendra*/}
            <AsideMenuSection title="SISTEMA"> 
                <AsideMenuButton  onClickFunc={() => nav("/")} text="Inicio" icon = {InicioIcon}></AsideMenuButton>
                <AsideMenuButton  onClickFunc={() => nav("/notificaciones")} text="Notificaciones" icon = {NotificacionIcon} notificationNumber={dataNotifications.nuevas}></AsideMenuButton>

            </AsideMenuSection> 
            

            <AsideMenuSection title="OPERACIONES">      
                <AsideMenuButton  onClickFunc={() => nav("/operaciones/ordenes_de_compra")}  text="Ordenes de compra" icon = {OrdenesDeCompraIcon}></AsideMenuButton>
                <AsideMenuButton text="Recepciones" icon = {RecepcionesIcon}></AsideMenuButton>
                <AsideMenuButton text="Devoluciones" icon = {DevolucionesIcon}></AsideMenuButton>
                <AsideMenuButton text="Mermas" icon = {MermasIcon}></AsideMenuButton>
                <AsideMenuButton text="Siniestros" icon = {SiniestrosIcon}></AsideMenuButton>
                <AsideMenuButton text="Transferencias" icon = {TransferenciasIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="VENTAS">
                <AsideMenuButton text="Registrar" icon = {RegistrarIcon}></AsideMenuButton>
                <AsideMenuButton text="Consultar" icon = {ConsultarIcon}></AsideMenuButton>
                <AsideMenuButton text="Ajustar" icon = {AjustarIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="KARDEX">
                <AsideMenuButton text="Consultar kardex" icon = {ConsultarKardexIcon}></AsideMenuButton>
                <AsideMenuButton text="Inventario teorico" icon = {InventarioTeoricoIcon}></AsideMenuButton>
            </AsideMenuSection> 
            
            
            <AsideMenuSection title="INVENTARIO FISICO">
                <AsideMenuButton text="Capturar inventario fisico" icon = {CapturarInventarioFisicoIcon}></AsideMenuButton>
                <AsideMenuButton text="Historico" icon = {HistoricoIcon}></AsideMenuButton>
                <AsideMenuButton text="Fisico VS Kardex" icon = {FisicoKardexIcon}></AsideMenuButton>
            </AsideMenuSection>     
            
            <AsideMenuSection title="POLIZAS">
                <AsideMenuButton text="Poliza contable" icon = {PolizaContableIcon}></AsideMenuButton>
            </AsideMenuSection>
            
            
            <AsideMenuSection title="REPORTES">
                <AsideMenuButton onClickFunc={() => nav("/reportes/analiticos")} text="Analiticos" icon = {AnaliticosIcon}></AsideMenuButton>
                <AsideMenuButton text="Resumenes" icon = {ResumenIcon}></AsideMenuButton>
                <AsideMenuButton text="Ventas" icon = {VentasIcon}></AsideMenuButton>           
                <AsideMenuButton text="Existencias" icon = {ExistenciasIcon}></AsideMenuButton>
                <AsideMenuButton text="Movimientos" icon = {MovimientosIcon}></AsideMenuButton>
                <AsideMenuButton text="Artipculos" icon = {ArticulosIcon}></AsideMenuButton>
                <AsideMenuButton text="Articulos a granel" icon = {ArticulosAGranelIcon}></AsideMenuButton>
                <AsideMenuButton text="Proveedores" icon = {ProveedoresIcon}></AsideMenuButton>
                <AsideMenuButton text="Cambios de precio" icon = {CambiosDePrecioIcon}></AsideMenuButton>
            </AsideMenuSection>
            <AsideMenuSection title='Preferencia'>
                <AsideMenuButton onClickFunc={()=> nav("/generacionautomatica")} text='Generacion Automatica' icon={BotIcon}></AsideMenuButton>
            </AsideMenuSection>
        
        </aside>     
        
    )   
}   