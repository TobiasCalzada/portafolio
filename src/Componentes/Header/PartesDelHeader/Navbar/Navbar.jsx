import "./Navbar.css"

function Navbar(){

    return(
        <div className="padreDeNavbar navbar-expand-lg">
            <nav class="navbar">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav listaDeLinks">
                            <li class="nav-item">
                                <a class="linkNavBar" href="#">inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="linkNavBar" href="#idseccion2">certificados</a>
                            </li>
                            <li class="nav-item">
                                <a class="linkNavBar" href="#idseccion3">sobre mí</a>
                            </li>
                            <li class="nav-item">
                                <a class="linkNavBar" href="#idseccion4">tecnologias</a>
                            </li>
                            <li class="nav-item">
                                <a class="linkNavBar" href="#idseccion5">proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="linkNavBar" href="#idseccion6">redes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
)
        /*
        <div className="padreDeNavbar">
            <nav className="navBar">
                <ul className="listaDeLinks">
                    <li><a className="linkNavBar" href="#">inicio</a></li>
                    <li><a className="linkNavBar" href="#idseccion2">certificados</a></li>
                    <li><a className="linkNavBar" href="#idseccion3">sobre mí</a></li>
                    <li><a className="linkNavBar" href="#idseccion4">tecnologias</a></li>
                    <li><a className="linkNavBar" href="#idseccion5">proyectos</a></li>
                    <li><a className="linkNavBar" href="#idseccion6">redes</a></li>
                </ul>
            </nav>
        </div> 
        */
}

export default Navbar;