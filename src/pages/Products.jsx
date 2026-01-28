import { useEffect, useState } from "react";
import axios from "axios";

function Products() {


    const [products, setProducts] = useState([]);


    const getProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(response => {

                setProducts(response.data);
            })
            .catch(error => {
                console.log("Errore:", error);
            });
    };


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h1>Prodotti</h1>

            {products.map(product => (
                <div key={product.id} className="card">

                    <img
                        src={product.image}
                        alt={product.title}
                        width="150"
                    />

                    <h3>{product.title}</h3>
                    <p>{product.price} €</p>

                </div>
            ))}
        </div>
    );
}

export default Products;
