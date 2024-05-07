import "./CardsPagina.css"

function CardsPagina(props){

    return(
    <div id="cardArea">
        <div className="Wrapper">
                <div className="box">
                    <img src={props.imagen} alt={props.alt} />
                    <div className="overlay">
                        <h3>{props.titulo}</h3>
                        <p>{props.descripcion}</p>
                        <div className="padreLinksPaginas">
                            <a href={props.link} target="_blank">
                                <div class="botonDeLinks">
                                    <div class="sign"><i class="fa-solid fa-globe webPaginaIcono"></i></div>
                                    <div class="textDePaginas">Website</div>
                                </div>
                            </a>
                            <a href={props.link2} target="_blank">
                                <div class="botonDeLinks">
                                    <div class="sign"><i class="fa-solid fa-code codigoPaginaIcono"></i></div>
                                    <div class="textDePaginas">Código</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default CardsPagina;