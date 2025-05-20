import html2pdf from "html2pdf.js";
import React, { useRef } from "react";
interface props{
  children : React.ReactNode
}

export default function ReporteAnalitico({children} : props){ 

  const columnns = ["Folio de la Nota", "Fecha de la Nota","Proveedor","Nombre","Subtotal","IVA","IEPS","Total Devolucion"]

  const contentRef = useRef(null)


  const generatePDF = () => {

    const options = {
      filename:     'pruebapdf.pdf',
      image:        { type: 'jpeg', quality: 1 }, // Ajusta la calidad de la imagen
      html2canvas:  { dpi: 300, scale: 4 }, // Aumenta la resolución al generar las imágenes
      jsPDF:        { unit: 'mm', format : 'a4', orientation: 'portrait' },
    };
  
    html2pdf()
      .from(contentRef.current)
      .set(options)
      .output('datauristring')
      .then((pdfUri : string)=>{
        const newWindow = window.open()
        newWindow?.document.write('<html><body><iframe width="100%" height="100%" src="' + pdfUri + '"></iframe></body></html>')
      })
  }



  return (
      <div ref={contentRef} className='bg-transparent border border-black w-[794px] h-[1120px] max-w-[794px] max-h-[1120px] min-w-[794px] min-h-[1120px] flex flex-col  gap-5 overflow-auto text-black'>
        {children}
      </div>
  )
}