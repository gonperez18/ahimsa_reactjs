const NavBar = () => {
    return(
            <nav className="Navbar">
                <div className="logo">
                    <img src="logo.png" alt="" />
                    <a href= "index.html" >
                       AHIMSA
                    </a>
                </div>
                    <ul>
                        <li >
                        <a href="index.html">Inicio</a>
                        </li>
                        <li>
                        <a href="index.html">Conocenos</a>
                        </li>
                        <li >
                        <a href="index.html">Productos</a>
                        </li>
                        <li >
                        <a href="index.html">Contacto</a>
                        </li>
                    </ul>

            </nav>

    )
}
export default NavBar