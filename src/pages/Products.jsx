

// importiamo useState e useEffect da React
// useState serve per salvare dei dati
// useEffect serve per eseguire del codice quando la pagina si carica
import { useState, useEffect } from "react";

// importiamo axios per fare richieste HTTP alle API
import axios from "axios";


import { Link } from "react-router-dom";


// creiamo il componente Products
function Products() {

    // useState crea una variabile di stato chiamata products
    // all'inizio è un array vuoto []
    const [products, setProducts] = useState([]);

    // questa funzione serve per prendere i prodotti dall'API
    const getProducts = () => {

        // axios.get fa una richiesta GET all'URL indicato
        axios.get("https://fakestoreapi.com/products")

            // .then viene eseguito quando la richiesta va a buon fine
            .then((response) => {

                // response.data contiene i dati ricevuti dall'API
                // salviamo i prodotti dentro lo stato
                setProducts(response.data);
            })

            // .catch viene eseguito se c'è un errore
            .catch((error) => {

                // stampiamo l'errore in console
                console.log("Errore nel caricamento prodotti:", error);
            });
    };

    // useEffect serve per eseguire una funzione quando il componente si carica
    useEffect(() => {

        // chiamiamo la funzione che prende i prodotti
        getProducts();

        // l'array vuoto [] significa:
        // "esegui questa funzione solo una volta"
    }, []);

    // return contiene quello che viene mostrato a schermo
    return (
        <div>

            {/* titolo della pagina */}
            <h1>Prodotti</h1>

            {/* map serve per ciclare l'array dei prodotti */}
            {products.map((product) => (

                // key serve a React per riconoscere ogni elemento
                <div key={product.id} className="card">


                    {/* Link alla pagina di dettaglio */}
                    <Link to={`/products/${product.id}`}>

                        {/* immagine del prodotto */}
                        <img
                            src={product.image}
                            alt={product.title}
                            width="150"
                        />



                        {/* titolo del prodotto */}
                        <h3>{product.title}</h3>

                    </Link>

                    {/* prezzo del prodotto */}
                    <p>{product.price} €</p>



                </div>
            ))
            }
        </div >
    );
}

// esportiamo il componente per usarlo in App.jsx o nel Router
export default Products;
