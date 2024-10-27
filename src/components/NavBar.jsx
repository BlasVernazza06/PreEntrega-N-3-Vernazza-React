import './CartWidget'
import CartWidget from './CartWidget'

function NavBar() {
  
    return (
      <>
        <header>
            <div className="nav-bar">
                <div className="logo-nav animate__animated animate__fadeInDown">
                    <p>AeroViajes</p>
                </div>
                <ul className="nav-list animate__animated animate__fadeInDown">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="pages/Productos.html">Shop</a></li>
                    <li><a href="pages/AcercaDe.html">About</a></li>
                    <li><a href="pages/Contactos.html">Contact</a></li>
                    <li><a href="pages/Ayuda.html">Help</a></li>
                </ul>
                <CartWidget counter={10}/>
            </div>
        </header>
      </>
    )
}

export default NavBar
