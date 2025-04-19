//Iconos (SVG) de los botones del AsideMenu
import { useNavigate } from 'react-router';
import AjustarIcon from '../../../assets/AjustarIcon.svg';
import AnaliticosIcon from '../../../assets/AnaliticosIcon.svg';
import ArticulosAGranelIcon from '../../../assets/ArticulosAGranelIcon.svg';
import ArticulosIcon from '../../../assets/ArticulosIcon.svg';
import NotificacionIcon from "../../../assets/bell.svg";
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
import MovimientosIcon from '../../../assets/MovimientosIcon.svg';
import OrdenesDeCompraIcon from '../../../assets/OrdenesDeCompraIcon.svg';
import PolizaContableIcon from '../../../assets/PolizaContableIcon.svg';
import ProveedoresIcon from '../../../assets/ProveedoresIcon.svg';
import RecepcionesIcon from '../../../assets/RecepcionesIcon.svg';
import RegistrarIcon from '../../../assets/RegistrarIcon.svg';
import ResumenIcon from '../../../assets/ResumenIcon.svg';
import BotIcon from '../../../assets/robot2.svg';
import SiniestrosIcon from '../../../assets/SiniestrosIcon.svg';
import TransferenciasIcon from '../../../assets/TransferenciasIcon.svg';
import VentasIcon from '../../../assets/VentasIcon.svg';
//************************************************************************* */

import dataNotifications from "../../../data/json_files/notifications_data.json";
import '../../../index.css';

import AsideMenuButton from "./AsideMenuButton";
import AsideMenuSection from "./AsideMenuSection"; //Importamos el componente AsideMenuSection
export default function AsideMenu(){ 

    const nav = useNavigate()

    return( 
        <aside className="h-screen w-[240px] min-w-[240px] flex flex-col gap-10 overflow-auto pt-5 pb-6 asidemenu bg-[#154f3a] border-r border-transparent duration-700"> 
            {/* Contenedor aside que contendra  */}
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
                <AsideMenuButton text="Analiticos" icon = {AnaliticosIcon}></AsideMenuButton>
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