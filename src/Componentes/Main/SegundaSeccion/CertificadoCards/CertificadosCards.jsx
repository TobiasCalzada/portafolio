import "./CertificadoCards.css";
import Card from "../Cards/Card";
import certificadoDesarrolloWeb from "../../../../assets/Imagenes/certificadoDesarrolloWeb.png";
import certificadoJavaScript from "../../../../assets/Imagenes/certificadoJavaScript.png";
import certificadoReact from "../../../../assets/Imagenes/certificadoReact.png";



function CertificadoCards(){

    return(
        <div className="padreDeCertificados" id="idseccion2">
            <h2>Certificados</h2>
            <div className="dividerDeCetificado"></div>
            <div className="contenedorDeCertificados">
                <Card titulo="Desarrollo Web" primerTexto="Certificado de aprobación del curso de Desarrollo web, dictaminado por la escuela de habilidades digitales Coder House." segundoTexto= "Iniciado el 7 de junio del 2022 y finalizado el 9 de agosto del 2022." tercerTexto="Nota del proyecto final de Desarrollo Web: 8" imagen={certificadoDesarrolloWeb} descripciónimg="imagen de certificado Desarrollo web"></Card>
                <Card titulo="JavaScript" primerTexto="Certificado de aprobación del curso de JavaScript, dictaminado por la escuela de habilidades digitales Coder House. Finalizado entre el top diez de mejores alumnos." segundoTexto= "Iniciado el 5 de septiembre del 2022 y finalizado el 31 de octubre del 2022."  tercerTexto="Nota del proyecto final de JavaScript: 10" imagen={certificadoJavaScript} descripciónimg="imagen de certificado JavaScript"></Card>
                <Card titulo="React" primerTexto="Certificado de aprobación del curso de React, dictaminado por la escuela de habilidades digitales Coder House." segundoTexto= "Iniciado el 5 de diciembre del 2022 y finalizado el 25 de enero del 2023."  tercerTexto="Nota del proyecto final de React: 10" imagen={certificadoReact} descripciónimg="imagen de certificado React"></Card>
            </div>
        </div>
    );
}

export default CertificadoCards;