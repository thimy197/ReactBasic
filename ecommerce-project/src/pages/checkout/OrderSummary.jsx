import { formatDate } from '../../utils/StringCommon.js';
import { formatMoney } from '../../utils/money.js';
import { DeliveryOption } from './DeliveryOption.jsx';

export function OrderSummary({ carts, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && carts.map((cart) => {
                let deliveryOptioned = deliveryOptions.find((option) => {
                    return option.id === cart.deliveryOptionId;
                });
                return (
                    <div key={cart.id} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {deliveryOptioned ? formatDate(deliveryOptioned.estimatedDeliveryTimeMs) : "Not available"}
                        </div>
                        <div className="cart-item-details-grid">
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
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOption deliveryOptions={deliveryOptions} cart={cart} />
                        </div>

                    </div>

                );
            })}
        </div>
    );
}