import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/Header';
import { ProductGrid } from './ProductGrid.jsx';
import './Home.css';

export function Home({ carts }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const response = async () => {
            try {
                const res = await axios.get("/api/products");
                if (res.data.length === 0) {
                    throw new Error("No products");
                }
                setProducts(res.data);
            } catch (err) {
                setError(err.message);
                console.log(error);
            }
        }
        response();
    }, []);
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicons/home-favicon.png" />
            <title>Ecommerce Project</title>
            <Header carts={carts} />

            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}