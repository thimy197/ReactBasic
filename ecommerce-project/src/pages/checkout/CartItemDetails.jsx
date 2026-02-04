import axios from 'axios';
import { formatMoney } from '../../utils/money.js';

export function CartItemDetails({ cart, loadCart }) {

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cart.productId}`);
        await loadCart();
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
                        Quantity: <span className="quantity-label">{cart.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                    >
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}