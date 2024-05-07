import "./Footer.css"
import TextoDeFooter from "./TextoDeFooter/TextoDeFooter";
import LinksRedes from "./LinksRedes/LinksRedes";
import Copyright from "./Copyright/Copyright";


function Footer(){

    return(
        <div className="padreDelFooter" id="idseccion6">
            <section className="seccionDeTextoFooter">
                <TextoDeFooter></TextoDeFooter>
            </section>
            <section className="seccionDeLinksFooter">
                <LinksRedes id="instagramId" logo="fa-brands fa-instagram fa-2xl" texto="Instagram" direccionLinks="https://www.instagram.com/toti.calzada/"></LinksRedes>
                <LinksRedes id="whatsappId" logo="fa-brands fa-whatsapp fa-2xl" texto="Whatsapp" direccionLinks="https://wa.me/5491136013441"></LinksRedes>
                <LinksRedes id="mailId" logo="fa-solid fa-envelope fa-2xl" texto="Gmail" direccionLinks="mailto:toticalzada12@gmail.com"></LinksRedes>
                <LinksRedes id="linkedinId" logo="fa-brands fa-linkedin fa-2xl" texto="Linkedin" direccionLinks="https://www.linkedin.com/in/tobias-calzada-9699771a7/"></LinksRedes>
                <LinksRedes id="githubId" logo="fa-brands fa-github fa-2xl" texto="GitHub" direccionLinks="https://github.com/TobiasCalzada"></LinksRedes>
            </section>
            <div className="telefono">
                <section><i class="fa-solid fa-phone"></i></section>
                <p>+54 9 11 3601-3441</p>
            </div>
            <section>
                <Copyright></Copyright>
            </section>
        </div>
    )
}

export default Footer;