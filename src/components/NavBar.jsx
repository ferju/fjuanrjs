import React from 'react';

function NavBar({ children }) {
    return (
        <header className="position-sticky sombra">
        <div className="menu-conteiner">
            <div>
        <a href="#"><img className="logomenu" src="../src/assets/img/logo.svg" alt="Metodo Curly Hair" /></a>
        </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a href="#">INICIO</a></li>
                        <li>|</li>
                        <li><a href="./pages/metodo.html">METODO</a></li>
                        <li>|</li>
                        <li><a href="./pages/productos.html">PRODUCTOS</a></li>
                        <li>|</li>
                        <li><a href="./pages/comprar.html">COMPRAR</a></li>
                        <li>|</li>
                    </ul>
                </nav>
                {children}
            </div>
        </div>
    </header>
    );
}

export default NavBar;