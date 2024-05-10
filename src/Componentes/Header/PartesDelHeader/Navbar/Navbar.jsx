import { useState } from "react";
import "./Navbar.css"

function Navbar(){

    const [ menu , setMenu] = useState(false);

    const togglemenu = () =>{
        setMenu(!menu)
    }

    return(
        <div className="header">
            <nav className={`navBar ${ menu ? "isActive" : ""}`}>
                <ul className="listdaDeLinks">
                    <li><a className="linkNavBar" href="#">inicio</a></li>
                    <li><a className="linkNavBar" href="#idseccion2">certificados</a></li>
                    <li><a className="linkNavBar" href="#idseccion3">sobre me</a></li>
                    <li><a className="linkNavBar" href="#idseccion4">tecnologias</a></li>
                    <li><a className="linkNavBar" href="#idseccion5">proyectos</a></li>
                    <li><a className="linkNavBar" href="#idseccion6">redes</a></li>
                </ul>
            </nav>
            <button  onClick={togglemenu} className="cabeceraButton">
            <svg className="cabeceraSvg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>
        </div>
    )
}

export default Navbar;