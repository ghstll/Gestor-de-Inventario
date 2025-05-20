import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';
import puppeteer from 'puppeteer';

interface ColumnasInterface{
    folio : string
    fecha : string
    estado : string
    fecha_creacion :string
    fecha_esperada : string
}

interface data{
    fechaInicial : string
    fechaFinal : string
    proveedor : string
    departamento : string
    columnas : ColumnasInterface
    count_recepciones : number
    count_totales : number
}

interface props{
    data : data
}


export default async function generateReport({data} : props){
    try {
        
    let templateHTML = fs.readFileSync(path.join(process.cwd(),`./templates/${tiporeporte}.hbs`),'utf-8')
    let template = Handlebars.compile(templateHTML)
    let html = template(data)

    let pdfPath = path.join('pdf',`Reportes_Operacion_Recepciones${new Date()}.pdf`)
    let options = {
        width: '1230px',
        headerTemplate: "<p></p>",
        footerTemplate: "<p></p>",
        displayHeaderFooter: false,
        margin: {
            top: "10px",
            bottom: "30px"
        },
        printBackground: true,
        path: pdfPath
    }
    const browser = await puppeteer.launch({
        args : ['--no-sandbox'],
        headless : true
    })

        let page = await browser.newPage()
        await page.setContent(html,{waitUntil : 'networkidle0'})
        await page.pdf(options)
        await browser.close()

        
    } catch (error) {   
            console.error("Error al generar el PDF : ", error)
    }
}

generateReport(data)