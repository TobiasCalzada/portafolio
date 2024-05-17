import "./Navbar.css"
import { useState } from "react"

function Navbar(){

    const [collapsed, setCollapsed] = useState(true)

    return (
        <div className="padreDeNavbar">
            <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" height="1.8rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="1.8rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    )}
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
}

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


export default Navbar;