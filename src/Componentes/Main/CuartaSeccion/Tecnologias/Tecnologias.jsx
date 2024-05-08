import "./Tecnologias.css"
import CardsTec from "../CardsTecnologia/CardsTec";
import firebase from "../../../../assets/Imagenes/firebase.png"

function Tecnologias(){

    return(
        <div className="ContenedorTec" id="idseccion4">
            <section className="textoDeTecnologia">
                <p className="textoTecnologias">Tecnologias</p>
                <h1 className="tituloTecnologias">Tecnologias Aprendidas</h1>
                <p className="infoTecnologias">Lenguajes y frameworks de programación estudiados e implementados en los proyectos realizados.</p>
            </section>
            <section className="cardsDeTecnologia">
                <CardsTec titulo="HTML" icono="fa-brands fa-html5" texto="lenguaje de programacion" id="html"></CardsTec>
                <CardsTec titulo="CSS" icono="fa-brands fa-css3-alt" texto="lenguaje de diseño gráfico" id="css"></CardsTec>
                <CardsTec titulo="JavaScript" icono="fa-brands fa-js" texto="lenguaje de programacion" id="javaScript"></CardsTec>
                <CardsTec titulo="BootStrap" icono="fa-brands fa-bootstrap" texto="framework" id="bootStrap"></CardsTec>
                <CardsTec titulo="Sass" icono="fa-brands fa-sass" texto="preprocesador de CSS" id="sass"></CardsTec>
                <CardsTec titulo="React" icono="fa-brands fa-react" texto="biblioteca de Javascript" id="react"></CardsTec>
                <CardsTec titulo="NPM" icono="fa-brands fa-npm" texto="gestionador de paquetes" id="npm"></CardsTec>
                <CardsTec titulo="GitHub" icono="fa-brands fa-github" texto="pagina para alojar proyectos" id="gitHub"></CardsTec>
                <CardsTec titulo="FireBase" img={firebase} texto="plataforma para el desarrollo de aplicaciones web" id="fireBase"></CardsTec>
            </section>
        </div>
    );
}

export default Tecnologias;