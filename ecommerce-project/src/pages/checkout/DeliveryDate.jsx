import { formatDate } from '../../utils/StringCommon.js';

export function DeliveryDate({ deliveryOptioned }) {
    return (
        <div className="delivery-date">
            Delivery date: {deliveryOptioned ? formatDate(deliveryOptioned.estimatedDeliveryTimeMs) : "Not available"}
        </div>
    );
}