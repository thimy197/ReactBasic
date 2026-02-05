import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../Components/Header';
import { ProductGrid } from './ProductGrid.jsx';
import './Home.css';
import { useSearchParams } from 'react-router';

export function Home({ carts, loadCart }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    const getProducts = async () => {
        try {
            const url = (search === null && !search) ? `/api/products` : `/api/products?search=${search}`;
            const res = await axios.get(url);
            setProducts(res.data);
        } catch (err) {
            setError(err.message);
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts();
    }, [search]);// Query param -> re-fetch
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicons/home-favicon.png" />
            <title>Ecommerce Project</title>
            <Header carts={carts} searchParam={search} />

            <div className="home-page">
                <ProductGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}