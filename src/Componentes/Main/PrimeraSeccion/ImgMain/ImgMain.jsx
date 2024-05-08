import "./ImgMain.css"
import persona from "../../../../assets/Imagenes/persona.png"

function ImgMain(){

    return(
        <div class="cardDeImagenMain">
            <img className="imagenDeMain" src={persona} alt="imagen de mi persona"></img>
        </div>
    );
}

export default ImgMain;