import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';
import puppeteer from 'puppeteer';


export default async function generateReport(data,tiporeporte){
    try {
        
    let templateHTML = fs.readFileSync(path.join(process.cwd(),`./templates/${tiporeporte}.hbs`),'utf-8')
    let template = Handlebars.compile(templateHTML)
    let html = template(data)

    let pdfPath = path.join('pdf',`${data.operacion}_${new Date()}.pdf`)
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

const fecha = new Date()
const dia = fecha.getDate()
const mes = fecha.getMonth() + 1
const anio = fecha.getFullYear()

const data = {
    operacion : "Ordenes de Compra",
    fechaReporte : `${dia} - ${mes} - ${anio}`,
    fechaInicial : "18/10/2024",
    fechaFinal : "28/02/2025",
    columnas : ["Folio de la nota", "Fecha de la nota" , "Proveedor","Nombre","Subtotal" , "IVA" , "IEPS" , "Total ordenes compra"],
    filas : [
        {
            folio: "923162",
            fecha: "27/01/2024",
            proveedor : "123612",
            nombre : "Bimbo empacadora",
            subtotal : 3724.25,
            iva : 572.27,
            ieps : 0.0,
            total : 2761.2
        },
        {
            folio: "923163",
            fecha: "28/01/2024",
            proveedor : "123613",
            nombre : "Coca Cola FEMSA",
            subtotal : 4500.00,
            iva : 720.00,
            ieps : 0.0,
            total : 5220.00
        },
        {
            folio: "923164",
            fecha: "29/01/2024",
            proveedor : "123614",
            nombre : "PepsiCo Alimentos",
            subtotal : 3100.50,
            iva : 496.08,
            ieps : 0.0,
            total : 3596.58
        },
        {
            folio: "923165",
            fecha: "30/01/2024",
            proveedor : "123615",
            nombre : "Nestlé México",
            subtotal : 5200.75,
            iva : 832.12,
            ieps : 0.0,
            total : 6032.87
        },
        {
            folio: "923166",
            fecha: "31/01/2024",
            proveedor : "123616",
            nombre : "Grupo Lala",
            subtotal : 2750.00,
            iva : 440.00,
            ieps : 0.0,
            total : 3190.00
        }
    ]
}

let count_subtotal = 0
let count_iva = 0
let count_ieps = 0
let count_total = 0

data.filas.forEach((fila)=>{
    count_subtotal += fila.subtotal
    count_iva += fila.iva
    count_ieps += fila.ieps
    count_total += fila.total
})

data.count_subtotal = count_subtotal
data.count_iva = count_iva
data.count_ieps = count_ieps
data.count_total = count_total
data.count_notas = data.filas.length


generateReport(data)