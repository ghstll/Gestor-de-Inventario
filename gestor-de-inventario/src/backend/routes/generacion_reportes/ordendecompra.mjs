import fs from "fs";
import * as pdf from "html-pdf-node";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
async function generarOrdenCompra(){
  
  // Emular __dirname en ES Modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Leer plantilla HTML desde archivo
  const plantilla = fs.readFileSync(path.join(__dirname, "../reports/ordenDeCompra/ordenDeCompra_plantilla.html"), "utf8");

  // Reemplazar los datos dinámicos
  const htmlFinal = plantilla
    .replace("{{cliente}}", "Juan Pérez")
    .replace("{{producto}}", "Laptop")
    .replace("{{cantidad}}", "3");

  // Generar PDF
  const options = { format: "A4" };
  const file = { content: htmlFinal };

  const pdfBuffer = await pdf.generatePdf(file,options)



  const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
    user: "contacto.satiplus@gmail.com",
    pass: "hqyl cgot oztp arew",
    },
  });

  const info = await transporter.sendMail({
        from: '"SATI Plus" <contacto.satiplus@gmail.com>', // sender address
        to: "22690128@tecvalles.mx", // list of receivers
        subject: "Orden de Compra - SATI Plus", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
        attachments : [
          {
            filename : "orden_compra.pdf",
            content : pdfBuffer,
            contentType : "application/pdf"
          }
        ]
  });
  console.log("Correo enviado con PDF : ",info.messageId)
  
}

generarOrdenCompra().catch(console.error)


