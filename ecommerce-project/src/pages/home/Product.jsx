import { formatMoney } from '../../utils/money.js';
import CheckMarkImg from '../../assets/images/icons/checkmark.png';
import axios from 'axios';
import { useState } from 'react';

export function Product({ product, loadCart }) {

    const [selectedValue, setSelectedValue] = useState(1);
    const addToCart = async () => {
        await axios.post("/api/cart-items", {
            productId: product.id,
            quantity: selectedValue
        });
        await loadCart();
    }
    const changeSelectQuantity = (event) => {
        setSelectedValue(Number(event.target.value));
    }
    return (
        <div className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={product.image} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                {formatMoney(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select value={selectedValue} onChange={changeSelectQuantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
                <img src={CheckMarkImg} />
                Added
            </div>

            <button className="add-to-cart-button button-primary"
                onClick={addToCart} >
                Add to Cart
            </button>
        </div>
    );
}