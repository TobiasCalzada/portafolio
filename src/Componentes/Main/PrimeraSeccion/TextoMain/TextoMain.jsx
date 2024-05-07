import "./TextoMain.css"
import DocumentoPdf from "./Curriculum.pdf"

function TextoMain(){

    return(
        <div className="contenedorDeTextoMain">
            <h1 className="encabezadoDeMain">Tobias<span> Calzada.</span></h1>
            <p className="textoDeMain">Desarrollador web frontend, con conocimientos en HTML, CSS, SASS, React, JavaScript, etc. Con la búsqueda de desarrollar mis habilidades y conocimientos al máximo.</p>
            <div className="padreEnlacePdf">
                <a href={DocumentoPdf} className="button" download>
                    <span class="button_lg">
                        <div class="button_sl"></div>
                        <div class="button_text">Descargar CV</div>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default TextoMain;