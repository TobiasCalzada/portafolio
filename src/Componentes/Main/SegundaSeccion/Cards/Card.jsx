import "./Card.css"

function Card(props){

    return(
        <div className="card">
            <div className="face front">
                <img src={props.imagen} alt={props.descripciónimg} />
                <h3>{props.titulo}</h3>
            </div>
            <div className="face back">
                <h3>{props.titulo}</h3>
                <div className="contenedorTextosCertificados">
                    <p className="primertTexto"><i class="fa-solid fa-circle fa-2xs circulo"></i>{props.primerTexto}</p>
                    <p className="segundotTexto"><i class="fa-solid fa-circle fa-2xs circulo"></i>{props.segundoTexto}</p>
                    <p className="tercertTexto"><i class="fa-solid fa-circle fa-2xs circulo"></i>{props.tercerTexto}</p>
                </div>
            </div>
        </div> 
    )
}

export default Card;