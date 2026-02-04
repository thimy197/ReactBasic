import { formatDate } from '../../utils/StringCommon.js';
import { formatMoney } from '../../utils/money.js';
import axios from 'axios';

export function DeliveryOption({ deliveryOptions, cart, loadCart }) {

    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((option) => {
                const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cart.productId}`, {
                        deliveryOptionId: option.id
                    });
                    await loadCart();
                }
                return (

                    <div key={option.id} className="delivery-option"
                        onClick={updateDeliveryOption} >
                        <input type="radio"
                            checked={option.id === cart.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cart.productId}`}
                            onChange={() => { }}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {formatDate(option.estimatedDeliveryTimeMs)}
                            </div>
                            <div className="delivery-option-price">
                                {option.priceCents === 0 ? "FREE Shipping" : `${formatMoney(option.priceCents)} - Shipping`}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}