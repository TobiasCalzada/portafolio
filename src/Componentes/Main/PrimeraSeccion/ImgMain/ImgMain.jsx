import "./ImgMain.css"
import persona from "../../../../assets/Imagenes/persona.png"

function ImgMain(){

    return(
        <div className="contenedorDeImgMain">
            <img className="imagenDeMain" src={persona} alt="imagen de mi persona"></img>
        </div>
    );
}

export default ImgMain;