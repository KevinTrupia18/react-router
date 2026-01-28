import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">Chi siamo</Link> |{" "}
            <Link to="/products">Prodotti</Link>
        </nav>
    );
}

export default Navbar;
