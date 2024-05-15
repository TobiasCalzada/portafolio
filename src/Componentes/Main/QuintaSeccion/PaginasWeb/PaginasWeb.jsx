import "./PaginasWeb.css";
import CardsPagina from "../CardsPaginas/CardsPagina";
import proyectoDesarrolloWeb from "../../../../assets/Imagenes/DesarrolloWeb.jpg";
import proyectoJavaScript from "../../../../assets/Imagenes/JavaScript.jpg";
import proyectoReact from "../../../../assets/Imagenes/react.jpg"

function PaginasWeb(){

    return(
        <div>
            <section className="headerDeProyectos">
                <h2 className="tituloDePaginas" id="idseccion5">Proyectos</h2>
                <div className="dividerDeProyectos"></div>
            </section>
            <div className="contenedorCardsPaginas">
                <CardsPagina 
                    imagen={proyectoDesarrolloWeb} 
                    titulo="Proyecto Desarrollo Web" 
                    descripcion="Proyecto final de Coderhouse (Desarrollo Web), ecommerce de articulo y productos sobre el mate, con diferentes secciones, aplicación de SCSS, Bootstrap y resposive." 
                    alt="imagen de la pagina web de desarrollo web" 
                    link="https://tobiascalzada.github.io/Desarrolloweb-coder/" 
                    link2="https://github.com/TobiasCalzada/Desarrolloweb-coder">
                </CardsPagina>
                <CardsPagina 
                    imagen={proyectoJavaScript} 
                    titulo="Proyecto JavaScript" 
                    descripcion="Proyecto final de Coderhouse (JavaScript), ecommerce destinado a productos de gimnasio, este proyecto contiene cards con productos que pueden agregarse a un carrito, agregar más cantidad o eliminar el producto y con resposive." 
                    alt="imagen de la pagina web de javascript"
                    link="https://tobiascalzada.github.io/JavaScirpt-coder/" 
                    link2="https://github.com/TobiasCalzada/JavaScirpt-coder">
                </CardsPagina>
                <CardsPagina 
                    imagen={proyectoReact}
                    titulo="Proyecto React"
                    descripcion="Proyecto final de Coderhouse (React), ecommerce de videojuegos, con base de datos de FireBase, con guardado en carrito, manejo de cantidades en productos, eliminación de estos y finalización de compra mediante formulario de datos."
                    alt="imagen de la pagina web de react" 
                    link="https://react45678457.000webhostapp.com/"
                    link2="https://github.com/TobiasCalzada/React-coder">
                </CardsPagina>
            </div>
        </div>
    );
}


export default PaginasWeb;