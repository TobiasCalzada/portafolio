import "./Navbar.css"

function Navbar(){

    return(
        <nav className="navBar">
            <a className="linkNavBar" href="#">inicio</a>
            <a className="linkNavBar" href="#idseccion2">certificados</a>
            <a className="linkNavBar" href="#idseccion3">sobre me</a>
            <a className="linkNavBar" href="#idseccion4">tecnologias</a>
            <a className="linkNavBar" href="#idseccion5">proyectos</a>
            <a className="linkNavBar" href="#idseccion6">redes</a>
        </nav>
    )
}

export default Navbar;