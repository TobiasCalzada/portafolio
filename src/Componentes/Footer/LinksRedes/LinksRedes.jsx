import "./LinksRedes.css"

function LinksRedes(props){

    return(
        <div className="padreDeRedes">
            <a href={props.direccionLinks} className="linkDeRedesPadre" target="_blank">
                <button class="Btn"id={props.id}>
                    <div class="sign"><i class={props.logo}></i></div>
                    <div class="text">{props.texto}</div>
                </button>
            </a>
        </div>
    )
}

export default LinksRedes;