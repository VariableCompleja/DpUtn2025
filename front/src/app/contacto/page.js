import ContactoForm from "@/components/ContactForm";
import "@/styles/contacto.css"

export const metadata={
    title:"Contacto",
    description:"MiContacto",
};

export default function Contacto(){
    return(
        <main className="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>            
            {}
            <ContactoForm/>
        </div>
        <div className="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También puede contactarnos por estos medios:</p>
            <ul>
                <li><i className="fa-solid fa-phone"></i><span className="titulo">Teléfono:</span> 011 463421</li>
                <li><i className="fa-solid fa-envelope"></i><span className="titulo">Email: </span>  contacto@educode.edu.ar</li>
                <li><i className="fa-brands fa-facebook"></i> <span className="titulo">Facebook: </span> Educode</li>
                <li><i className="fa-brands fa-whatsapp"></i><span className="titulo">WhatsApp: </span> +54 9 11 463435</li>
            </ul>
        </div>
    </main>
    )
}