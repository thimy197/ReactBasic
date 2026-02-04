import { DeliveryOption } from './DeliveryOption.jsx';
import { CartItemDetails } from './CartItemDetails.jsx';
import { DeliveryDate } from './DeliveryDate'

export function OrderSummary({ carts, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && carts.map((cart) => {
                let deliveryOptioned = deliveryOptions.find((option) => {
                    return option.id === cart.deliveryOptionId;
                });
                return (
                    <div key={cart.id} className="cart-item-container">
                        <DeliveryDate deliveryOptioned={deliveryOptioned} />
                        <div className="cart-item-details-grid">
                            <CartItemDetails cart={cart} />
                            <DeliveryOption deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />
                        </div>

                    </div>

                );
            })}
        </div>
    );
}