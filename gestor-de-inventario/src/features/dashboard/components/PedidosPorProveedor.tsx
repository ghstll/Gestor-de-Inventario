import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface Pedido {
    fecha: string;
    pedidos : number;
    total : number
}

interface dataproveedores{
    [key : string] : Pedido[]
} 

const dataPorProveedores: dataproveedores = {
    "proveedor_salud_mex": [
      { fecha: "Lunes 15/04", pedidos: 6, total: 1800 },
      { fecha: "Martes 16/04", pedidos: 0, total: 0 },
      { fecha: "Miércoles 17/04", pedidos: 7, total: 3200 },
      { fecha: "Jueves 18/04", pedidos: 1, total: 400 },
      { fecha: "Viernes 19/04", pedidos: 6, total: 3400 },
      { fecha: "Sábado 20/04", pedidos: 8, total: 4600 },
      { fecha: "Domingo 21/04", pedidos: 0, total: 0 },
      { fecha: "Lunes 22/04", pedidos: 7, total: 3000 },
      { fecha: "Martes 23/04", pedidos: 1, total: 350 },
      { fecha: "Miércoles 24/04", pedidos: 4, total: 2000 },
      { fecha: "Jueves 25/04", pedidos: 8, total: 3700 },
      { fecha: "Viernes 26/04", pedidos: 0, total: 0 },
      { fecha: "Sábado 27/04", pedidos: 9, total: 5200 },
      { fecha: "Domingo 28/04", pedidos: 4, total: 2200 },
    ],
    "farma_plus": [
      { fecha: "Lunes 15/04", pedidos: 0, total: 0 },
      { fecha: "Martes 16/04", pedidos: 6, total: 1900 },
      { fecha: "Miércoles 17/04", pedidos: 4, total: 1500 },
      { fecha: "Jueves 18/04", pedidos: 7, total: 3100 },
      { fecha: "Viernes 19/04", pedidos: 1, total: 500 },
      { fecha: "Sábado 20/04", pedidos: 10, total: 4800 },
      { fecha: "Domingo 21/04", pedidos: 2, total: 900 },
      { fecha: "Lunes 22/04", pedidos: 6, total: 1800 },
      { fecha: "Martes 23/04", pedidos: 0, total: 0 },
      { fecha: "Miércoles 24/04", pedidos: 6, total: 2600 },
      { fecha: "Jueves 25/04", pedidos: 1, total: 450 },
      { fecha: "Viernes 26/04", pedidos: 6, total: 3300 },
      { fecha: "Sábado 27/04", pedidos: 9, total: 4700 },
      { fecha: "Domingo 28/04", pedidos: 0, total: 0 },
    ],

    "medilogic": [
        { fecha: "Lunes 15/04", pedidos: 5, total: 1600 },
        { fecha: "Martes 16/04", pedidos: 1, total: 400 },
        { fecha: "Miércoles 17/04", pedidos: 0, total: 0 },
        { fecha: "Jueves 18/04", pedidos: 7, total: 3100 },
        { fecha: "Viernes 19/04", pedidos: 8, total: 4000 },
        { fecha: "Sábado 20/04", pedidos: 2, total: 800 },
        { fecha: "Domingo 21/04", pedidos: 0, total: 0 },
        { fecha: "Lunes 22/04", pedidos: 6, total: 2900 },
        { fecha: "Martes 23/04", pedidos: 9, total: 5100 },
        { fecha: "Miércoles 24/04", pedidos: 5, total: 2300 },
        { fecha: "Jueves 25/04", pedidos: 1, total: 300 },
        { fecha: "Viernes 26/04", pedidos: 4, total: 1900 },
        { fecha: "Sábado 27/04", pedidos: 7, total: 3700 },
        { fecha: "Domingo 28/04", pedidos: 3, total: 1200 },
      ],
    
      "biosuministros": [
        { fecha: "Lunes 15/04", pedidos: 4, total: 1400 },
        { fecha: "Martes 16/04", pedidos: 2, total: 800 },
        { fecha: "Miércoles 17/04", pedidos: 0, total: 0 },
        { fecha: "Jueves 18/04", pedidos: 6, total: 2700 },
        { fecha: "Viernes 19/04", pedidos: 1, total: 500 },
        { fecha: "Sábado 20/04", pedidos: 5, total: 2100 },
        { fecha: "Domingo 21/04", pedidos: 3, total: 1000 },
        { fecha: "Lunes 22/04", pedidos: 8, total: 4200 },
        { fecha: "Martes 23/04", pedidos: 9, total: 4700 },
        { fecha: "Miércoles 24/04", pedidos: 6, total: 3100 },
        { fecha: "Jueves 25/04", pedidos: 0, total: 0 },
        { fecha: "Viernes 26/04", pedidos: 4, total: 1800 },
        { fecha: "Sábado 27/04", pedidos: 2, total: 900 },
        { fecha: "Domingo 28/04", pedidos: 0, total: 0 },
      ],
    
      "imss_central": [
        { fecha: "Lunes 15/04", pedidos: 7, total: 3000 },
        { fecha: "Martes 16/04", pedidos: 5, total: 2200 },
        { fecha: "Miércoles 17/04", pedidos: 2, total: 800 },
        { fecha: "Jueves 18/04", pedidos: 0, total: 0 },
        { fecha: "Viernes 19/04", pedidos: 4, total: 1900 },
        { fecha: "Sábado 20/04", pedidos: 6, total: 2700 },
        { fecha: "Domingo 21/04", pedidos: 1, total: 500 },
        { fecha: "Lunes 22/04", pedidos: 8, total: 4400 },
        { fecha: "Martes 23/04", pedidos: 0, total: 0 },
        { fecha: "Miércoles 24/04", pedidos: 3, total: 1200 },
        { fecha: "Jueves 25/04", pedidos: 9, total: 4800 },
        { fecha: "Viernes 26/04", pedidos: 5, total: 2300 },
        { fecha: "Sábado 27/04", pedidos: 7, total: 3900 },
        { fecha: "Domingo 28/04", pedidos: 4, total: 1800 },
      ],
    
      "proveedor_regional_norte": [
        { fecha: "Lunes 15/04", pedidos: 1, total: 400 },
        { fecha: "Martes 16/04", pedidos: 4, total: 1600 },
        { fecha: "Miércoles 17/04", pedidos: 0, total: 0 },
        { fecha: "Jueves 18/04", pedidos: 6, total: 2400 },
        { fecha: "Viernes 19/04", pedidos: 8, total: 4100 },
        { fecha: "Sábado 20/04", pedidos: 2, total: 1000 },
        { fecha: "Domingo 21/04", pedidos: 1, total: 300 },
        { fecha: "Lunes 22/04", pedidos: 9, total: 5000 },
        { fecha: "Martes 23/04", pedidos: 3, total: 1300 },
        { fecha: "Miércoles 24/04", pedidos: 5, total: 2500 },
        { fecha: "Jueves 25/04", pedidos: 0, total: 0 },
        { fecha: "Viernes 26/04", pedidos: 7, total: 3600 },
        { fecha: "Sábado 27/04", pedidos: 6, total: 3200 },
        { fecha: "Domingo 28/04", pedidos: 0, total: 0 },
      ],
    
      "proveedor_regional_sur": [
        { fecha: "Lunes 15/04", pedidos: 5, total: 2000 },
        { fecha: "Martes 16/04", pedidos: 1, total: 350 },
        { fecha: "Miércoles 17/04", pedidos: 0, total: 0 },
        { fecha: "Jueves 18/04", pedidos: 6, total: 2700 },
        { fecha: "Viernes 19/04", pedidos: 4, total: 1800 },
        { fecha: "Sábado 20/04", pedidos: 7, total: 3400 },
        { fecha: "Domingo 21/04", pedidos: 2, total: 900 },
        { fecha: "Lunes 22/04", pedidos: 8, total: 4000 },
        { fecha: "Martes 23/04", pedidos: 0, total: 0 },
        { fecha: "Miércoles 24/04", pedidos: 3, total: 1500 },
        { fecha: "Jueves 25/04", pedidos: 9, total: 4600 },
        { fecha: "Viernes 26/04", pedidos: 1, total: 500 },
        { fecha: "Sábado 27/04", pedidos: 6, total: 2900 },
        { fecha: "Domingo 28/04", pedidos: 4, total: 1700 },
      ],
    
      "distribuciones_mexfar": [
        { fecha: "Lunes 15/04", pedidos: 0, total: 0 },
        { fecha: "Martes 16/04", pedidos: 3, total: 1300 },
        { fecha: "Miércoles 17/04", pedidos: 7, total: 3300 },
        { fecha: "Jueves 18/04", pedidos: 1, total: 400 },
        { fecha: "Viernes 19/04", pedidos: 5, total: 2100 },
        { fecha: "Sábado 20/04", pedidos: 6, total: 2800 },
        { fecha: "Domingo 21/04", pedidos: 2, total: 950 },
        { fecha: "Lunes 22/04", pedidos: 9, total: 5000 },
        { fecha: "Martes 23/04", pedidos: 4, total: 1600 },
        { fecha: "Miércoles 24/04", pedidos: 0, total: 0 },
        { fecha: "Jueves 25/04", pedidos: 8, total: 4200 },
        { fecha: "Viernes 26/04", pedidos: 6, total: 2700 },
        { fecha: "Sábado 27/04", pedidos: 1, total: 500 },
        { fecha: "Domingo 28/04", pedidos: 3, total: 1200 },
      ]
};
  
export default function PedidosPorProveedor(){
    const [proveedorSeleccionado,setProveedorSeleccionado] = useState<string>("proveedor_salud_mex")
    const obtenerProveedorSeleccionado = (event : React.ChangeEvent<HTMLSelectElement>) =>{
        setProveedorSeleccionado(event.target.value)
    }
    return (
        <article className="flex flex-1 flex-col gap-3 min-w-[300px] items-center  p-2  rounded-md  bg-[#1a1b22] text-white duration-700 hover:brightness-125">
            <h1 className="font-bold">Cantidad de Pedidos por proveedor</h1>
            <select name="proveedor" id="proveedor" className="bg-[#3e4051] rounded-md" onChange={obtenerProveedorSeleccionado}>
                <option value="">Seleccione un proveedor</option>
                <option value="proveedor_salud_mex">Salud y Suministros de México</option>
                <option value="farma_plus">FarmaPlus Distribuidores</option>
                <option value="medilogic">Medilogic S.A. de C.V.</option>
                <option value="biosuministros">BioSuministros Hospitalarios</option>
                <option value="imss_central">Almacén Central IMSS</option>
                <option value="proveedor_regional_norte">Proveedor Regional Zona Norte</option>
                <option value="proveedor_regional_sur">Proveedor Regional Zona Sur</option>
                <option value="distribuciones_mexfar">Distribuciones MexFar</option>
            </select>
            <div className='w-full h-[250px]'>
                <ResponsiveContainer width="100%" height="100%" debounce={300}>
                    <AreaChart
                    data={dataPorProveedores[proveedorSeleccionado]}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                    <CartesianGrid strokeDasharray="2" stroke="white" vertical = {false}/>
                    <XAxis dataKey="fecha"/>
                    <YAxis stroke="white" dataKey="pedidos"
                    />
                    <Tooltip contentStyle={{
                        backgroundColor : "black"
                    }}/>
                    <defs>
                        <linearGradient id='gradient_pedidosproveedor' x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
                            <stop offset={"10%"} stopColor='#64ff03' stopOpacity={1}>
                            </stop>
                            <stop offset={"90%"} stopColor='#c3fc05' stopOpacity={0.01}></stop>
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="pedidos"
                        stroke="white"
                        fill="url(#gradient_pedidosproveedor)"
                        fillOpacity={1}
                    />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
};

