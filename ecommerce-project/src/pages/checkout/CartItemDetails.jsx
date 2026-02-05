import axios from 'axios';
import { formatMoney } from '../../utils/money.js';
import { useState } from 'react';

export function CartItemDetails({ cart, loadCart }) {

    const [isUpdating, setUpdating] = useState(false);
    const [quantity, setQuantity] = useState(cart.quantity);

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cart.productId}`);
        await loadCart();
    }
    const updateCartItemQty = async (quantity) => {
        await axios.put(`/api/cart-items/${cart.productId}`, {
            quantity
        });
        await loadCart();
    }

    const changeQuantity = (event) => {
        setQuantity(event.target.value);
    }
    const updateQuantity = () => {
        let quantityNum = Number(quantity);
        if (!isUpdating) {
            setUpdating(true);
            return;
        } else if (quantityNum === null || isNaN(quantityNum)) {
            alert("please input Number");
            setQuantity(cart.quantity);
        } else if (cart.quantity === quantityNum) {
            alert('Not change quantity');
        } else if (quantityNum === 0) {
            deleteCartItem();
        } else {
            updateCartItemQty(quantityNum);
        }
        setUpdating(false);
    }
    const updateQtyByKeyDown = (event) => {
        if (event.key === 'Enter') {
            updateQuantity();
        } else if (event.key === 'Escape') {
            setQuantity(cart.quantity);
            setUpdating(false);
        }
    }
    return (
        <>
            <img className="product-image"
                src={cart.product.image} />
            <div className="cart-item-details">
                <div className="product-name">
                    {cart.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cart.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity:
                        {isUpdating &&
                            (<input type="text"
                                value={quantity}
                                onChange={changeQuantity}
                                onKeyDown={updateQtyByKeyDown}
                                style={{ width: `50px` }} />)}
                        <span className="quantity-label">{cart.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary"
                        onClick={updateQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}