interface Props {
  title : string;
  formatos : string[];
  activo :  boolean;
  destinatarios : string[];
  fecha_inicial : Date;
  fecha_final : Date
  periodicidadDias : number;
  isOpenModal : boolean;
  setIsOpenModal : React.Dispatch<React.SetStateAction<boolean>>;
  setIdSelected : React.Dispatch<React.SetStateAction<number>>
  id : number;
}

import csv_icon from '../../../assets/icons/format/csv_icon.png';
import excel_icon from '../../../assets/icons/format/excel_icon.png';
import pdf_icon from '../../../assets/icons/format/pdf_icon.png';

export default function GeneracionAutomaticaCard({...props}: Props) { 
  return (
    <article className={`border border-black rounded-md p-2 w-full ${props.activo ? "bg-gradient-to-r from-green-200  to-orange-100" : "bg-gradient-to-r from-gray-300 to-gray-400"} hover:brightness-110 duration-500 cursor-pointer flex flex-col gap-4 hover:scale-[1.02]`} onClick={()=> {props.setIsOpenModal(!props.isOpenModal); props.setIdSelected(props.id)}} id={props.id.toString()}>
        <div className='flex items-center justify-between'>
			<h1 className="font-bold">{props.title}</h1>
			<h1 className='font-bold'>Proxima generacion : {props.fecha_final.getDate()} - {props.fecha_final.getMonth()+1} - {props.fecha_final.getFullYear()}</h1>
		</div>
		<div className="flex items-center justify-between">
			<div>
			<h1 className="font-medium">Destinatarios : </h1>
			<div className="ml-3">
				{
				props.destinatarios.map((destinatario) => {
					return (
						<h1>{destinatario}</h1>
					)
				})  
				}
			</div>
			</div>
			<div className="flex gap-3 items-center">
			<h1 className="font-medium">Formatos : </h1>
			<div className="flex gap-2">
				{
				props.formatos.map((formato) => {
					return (
						<img src={formato == "pdf" ? pdf_icon : formato == "excel" ? excel_icon : csv_icon} alt="" width={26}/>
					)
				})  
				}
			</div>
			</div>
			<div className="flex gap-3 items-center">
			<h1 className="font-medium">Estado :  </h1>
			<h1>{props.activo ? "Activos" : "Inactivos"}</h1>
			</div>
		</div>
    </article>
  )
}