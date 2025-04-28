import { useEffect, useState } from "react"
import csv_icon from "../../../../../shared/assets/icons/format/csv_icon.png"
import excel_icon from "../../../../../shared/assets/icons/format/excel_icon.png"
import pdf_icon from "../../../../../shared/assets/icons/format/pdf_icon.png"

interface props{
    setFormatos : React.Dispatch<React.SetStateAction<string[]>>
    loadFormatos : string[]
}

export default function GeneracionAutomaticaNuevaConfig_Formatos({...props} : props) {

    const [formatos , setFormatosLocal] = useState<string[]>([])

    const handleChange = (formato: string) => {
            setFormatosLocal((prev) => {
            const alreadySelected = prev.includes(formato);
            const updated = alreadySelected ? prev.filter((f) => f !== formato) : [...prev, formato];
            return updated;
        });
    };

    const loadData = () =>{
        if(props.loadFormatos.length > 0){
            setFormatosLocal(props.loadFormatos)
        }
    }
    useEffect(()=>{
        loadData()
    },props.loadFormatos)
   
    useEffect(()=>{
        props.setFormatos(formatos)
    },[formatos])

    return (
        <article className="flex flex-col gap-3 ">
            <div>
                <h1 className="font-medium">Elige los formatos para la generacion del reporte automatico</h1>
            </div>  
            <div className="flex justify-between">
            <div className="flex italic gap-2">
                <input type="checkbox" id="pdf_file" name="pdf_file" onChange={() => handleChange("pdf")} checked = {formatos.includes("pdf")} />
                <label htmlFor="pdf_file" className="flex gap-2"><img src={pdf_icon} alt="" width={20}  />Archivo PDF</label>
            </div>
            <div className="flex italic gap-2">
                <input type="checkbox" id="excel_icon" name="excel_icon"  onChange={() => handleChange("excel")} checked = {formatos.includes("excel")}/>
                <label htmlFor="excel_icon" className="flex gap-2"><img src={excel_icon} alt="" width={20}/>Excel</label>
            </div>
            <div className="flex italic gap-2">
                <input type="checkbox" id="csv_icon" name="csv_icon" onChange={() => handleChange("csv")} checked = {formatos.includes("csv")}/>
                <label htmlFor="csv_icon" className="flex gap-2"><img src={csv_icon} alt="" width={20}/>Archivo CSV</label>
            </div>
            </div>
        </article>
  )
}   