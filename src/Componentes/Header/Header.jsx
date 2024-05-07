import "./Header.css"
import Logo from "./PartesDelHeader/Logo/Logo";
import Navbar from "./PartesDelHeader/Navbar/Navbar";


function Header(){
    return(
        <header className="contenedor">
            <Logo></Logo>
            <Navbar></Navbar>
        </header>
    );
}

export default Header;