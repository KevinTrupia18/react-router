
// importiamo Link da react-router-dom
// Link serve per navigare tra le pagine SENZA ricaricare la pagina
import { Link } from "react-router-dom";

// creiamo il componente Navbar
function Navbar() {

    // return indica cosa viene mostrato a schermo
    return (

        // nav è il contenitore della barra di navigazione
        <nav>

            {/* Link porta alla pagina Home */}
            <Link to="/">Home</Link> |{" "}

            {/* Link porta alla pagina Chi siamo */}
            <Link to="/about">Chi siamo</Link> |{" "}

            {/* Link porta alla pagina Prodotti */}
            <Link to="/products">Prodotti</Link>

        </nav>
    );
}

// esportiamo la Navbar per usarla in App.jsx
export default Navbar;

