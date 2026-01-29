
// importiamo useParams da react-router-dom
// useParams serve per leggere i parametri dall'URL (es: l'id del prodotto)
import { useParams } from "react-router-dom";

// importiamo useEffect e useState da React
// useState serve per salvare dati nello stato
// useEffect serve per eseguire codice quando il componente si carica
import { useEffect, useState } from "react";

// importiamo axios per fare richieste HTTP alle API
import axios from "axios";

// creiamo il componente ProductDetail
function ProductDetail() {

    // useParams legge i parametri presenti nell'URL
    // se l'URL è /products/5, id sarà 5
    const { id } = useParams();

    // useState crea una variabile di stato chiamata product
    // inizialmente è null perché il prodotto non è ancora caricato
    const [product, setProduct] = useState(null);

    // useEffect viene eseguito quando il componente si carica
    // e ogni volta che cambia l'id
    useEffect(() => {

        // facciamo una richiesta GET all'API
        // usiamo l'id per prendere il prodotto corretto
        axios.get(`https://fakestoreapi.com/products/${id}`)

            // quando la richiesta va a buon fine
            .then((response) => {

                // response.data contiene i dati del prodotto
                // salviamo il prodotto nello stato
                setProduct(response.data);
            });

        // [id] significa:
        // "riesegui useEffect solo se cambia l'id"
    }, [id]);

    // se product è ancora null
    // mostriamo un messaggio di caricamento
    if (!product) {
        return <p>Caricamento...</p>;
    }

    // se il prodotto è stato caricato
    // mostriamo i dettagli del prodotto
    return (
        <div>

            {/* titolo del prodotto */}
            <h1>{product.title}</h1>

            {/* immagine del prodotto */}
            <img src={product.image} alt={product.title} width="200" />

            {/* descrizione del prodotto */}
            <p>{product.description}</p>

            {/* prezzo del prodotto */}
            <p>Prezzo: {product.price} €</p>

            {/* categoria del prodotto */}
            <p>Categoria: {product.category}</p>
        </div>
    );
}

// esportiamo il componente per usarlo nel Router
export default ProductDetail;
