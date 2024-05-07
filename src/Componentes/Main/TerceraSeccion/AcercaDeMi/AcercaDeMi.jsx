import "./AcercaDeMi.css"

function AcercaDeMi(){


    return(
        <div className="padreDeAcercaDeMi" id="idseccion3">
            <div className="about">
                <img src="/imagenes/about.png" alt="imagen de mi persona"></img>
                <div className="aboutInfo">
                    <h2>Sobre me</h2>
                    <div className="divider"></div>
                    <p>Hola, mi nombre es Tobias Calzada, soy un chico de 21 años, programador junior en FrontEnd con conocimientos en HTML, JavaScript, React, etc.</p>
                    <p>Mi personalidad se basa en superarme en cada paso y línea de código que se pueda, mi prioridad en este momento es conseguir mi primer ingreso en el mundo laboral de la programación web, para de este modo poder expandir mis conocimientos y habilidades sobre la materia. Me encantaría poder conocer un equipo de trabajo del cual pueda aprender y convivir, para desenvolvernos en todas nuestras tareas y apoyarnos el uno al otro ante cualquier duda.</p>
                </div>
            </div>
        </div>
    );
}

export default AcercaDeMi;