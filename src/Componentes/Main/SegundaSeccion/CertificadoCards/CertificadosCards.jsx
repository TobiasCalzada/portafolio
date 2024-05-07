import "./CertificadoCards.css"
import Card from "../Cards/Card";


function CertificadoCards(){

    return(
        <div className="padreDeCertificados" id="idseccion2">
            <h2>Certificados</h2>
            <div className="dividerDeCetificado"></div>
            <div className="contenedorDeCertificados">
                <Card titulo="Desarrollo Web" primerTexto="Certificado de aprobación del curso de Desarrollo web, dictaminado por la escuela de habilidades digitales Coder House." segundoTexto= "Iniciado el 7 de junio del 2022 y finalizado el 9 de agosto del 2022." tercerTexto="Nota del proyecto final de Desarrollo Web: 8" imagen="/Imagenes/certificadoDesarrolloWeb.png" descripciónimg="imagen de certificado Desarrollo web"></Card>
                <Card titulo="JavaScript" primerTexto="Certificado de aprobación del curso de JavaScript, dictaminado por la escuela de habilidades digitales Coder House. Finalizado entre el top diez de mejores alumnos." segundoTexto= "Iniciado el 5 de septiembre del 2022 y finalizado el 31 de octubre del 2022."  tercerTexto="Nota del proyecto final de JavaScript: 10" imagen="/Imagenes/certificadoJavaScript.png" descripciónimg="imagen de certificado JavaScript"></Card>
                <Card titulo="React" primerTexto="Certificado de aprobación del curso de React, dictaminado por la escuela de habilidades digitales Coder House." segundoTexto= "Iniciado el 5 de diciembre del 2022 y finalizado el 25 de enero del 2023."  tercerTexto="Nota del proyecto final de React: 10" imagen="/Imagenes/certificadoReact.png" descripciónimg="imagen de certificado React"></Card>
            </div>
        </div>
    );
}

export default CertificadoCards;