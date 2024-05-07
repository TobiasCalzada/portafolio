import "./CardsTec.css"

function CardsTec(props){

    return(
        <div className="cotenedorDeCardsTec" id={props.id}>
            <i className={props.icono}></i>
            <img src={props.img}></img>
            <h3 className="tituloDeTecCard">{props.titulo}</h3>
            <p className="textoDeTecCard">{props.texto}</p>
        </div>
    );
}

export default CardsTec;