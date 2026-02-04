import { formatDate } from '../../utils/StringCommon.js';
import { formatMoney } from '../../utils/money.js';

export function DeliveryOption({ deliveryOptions, cart }) {
    return (

        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((option) => {
                return (
                    <div key={option.id} className="delivery-option">
                        <input type="radio"
                            checked={option.id === cart.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cart.productId}`} />
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