import { formatDateFormat, M_D_FORMAT } from '../../utils/StringCommon.js';
import { Link } from 'react-router';
import { Fragment } from 'react';
import BuyAgainImg from '../../assets/images/icons/buy-again.png';

export function OrderDetailsGrid({ order }) {
    return (
        <div className="order-details-grid">
            {order.products.map((orderProduct) => (
                <Fragment key={orderProduct.productId}>
                    <div className="product-image-container">
                        <img src={orderProduct.product.image} />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                            Arriving on: {formatDateFormat(orderProduct.estimatedDeliveryTimeMs, M_D_FORMAT)}
                        </div>
                        <div className="product-quantity">
                            Quantity: {orderProduct.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                            <img className="buy-again-icon" src={BuyAgainImg} />
                            <span className="buy-again-message">Add to Cart</span>
                        </button>
                    </div>
                    <div className="product-actions">
                        <Link to={`/tracking/${order.id}/${orderProduct.productId}`}>
                            <button className="track-package-button button-secondary">
                                Track package
                            </button>
                        </Link>
                    </div>
                </Fragment>
            ))}
        </div>

    );
}