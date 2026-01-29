

// importiamo i componenti di React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo la Navbar
import Navbar from "./components/Navbar";

// importiamo le pagine
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
// componente principale dell'app
function App() {

  return (

    // BrowserRouter avvolge tutta l'app
    // serve per abilitare il routing
    <BrowserRouter>

      {/* Navbar sempre visibile */}
      <Navbar />

      {/* Routes contiene tutte le rotte */}
      <Routes>

        {/* rotta per la Home */}
        <Route path="/" element={<Home />} />

        {/* rotta per la pagina Chi siamo */}
        <Route path="/about" element={<About />} />

        {/* rotta per la pagina Prodotti */}
        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetail />} />

      </Routes>

    </BrowserRouter>
  );
}

// esportiamo App
export default App;



