import { Header } from '../../Components/Header';
import { useState, useEffect, Fragment } from 'react'
import { Link, useParams } from 'react-router';
import './Tracking.css';
import { formatDate, getShippingStatusByPercent, PREPARING, SHIPPING, DELIVERED } from '../../utils/StringCommon.js';
import axios from 'axios';
import dayjs from 'dayjs';

export function Tracking({ carts }) {
    const { orderId, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [deliveryPercent, setDeliveryPercent] = useState(null);
    const [shippingStatus, setShippingStatus] = useState(null);

    useEffect(() => {
        const fetchTracking = async () => {
            try {
                const response = await axios.get(`api/orders/${orderId}?expand=products`);
                const orderRes = response.data;
                if (orderRes.products.length > 0) {
                    const productRes = orderRes.products.find((product) => product.productId === productId);
                    setProduct(productRes);

                    const totalDeliveryTimes = productRes.estimatedDeliveryTimeMs - orderRes.orderTimeMs;
                    const timePassedMs = dayjs().valueOf() - orderRes.orderTimeMs;
                    const timeDeliveryPercent = (timePassedMs / totalDeliveryTimes) * 100;
                    //const timeDeliveryPercent = (totalDeliveryTimes * 0.5 / totalDeliveryTimes) * 100;
                    console.log(timeDeliveryPercent);
                    setDeliveryPercent(timeDeliveryPercent > 100 ? 100 : timeDeliveryPercent);
                    setShippingStatus(getShippingStatusByPercent(timeDeliveryPercent));
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchTracking();// return Promise
    }, [orderId]);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicons/tracking-favicon.png" />
            <title>Tracking</title>
            <Header carts={carts} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>
                    {product && (
                        <Fragment key={product.productId}>
                            <div className="delivery-date">
                                {deliveryPercent >= 100 ? "Delivered on" : "Arriving on"} {formatDate(product.estimatedDeliveryTimeMs)}
                            </div>

                            <div className="product-info">
                                {product.product.name}
                            </div>

                            <div className="product-info">
                                Quantity: {product.quantity}
                            </div>

                            <img className="product-image" src={product.product.image} />


                            <div className="progress-labels-container">
                                <div className={`progress-label ${shippingStatus === PREPARING && "current-status"}`}>
                                    Preparing
                                </div>
                                <div className={`progress-label ${shippingStatus === SHIPPING && "current-status"}`}>
                                    Shipped
                                </div>
                                <div className={`progress-label ${shippingStatus === DELIVERED && "current-status"}`}>
                                    Delivered
                                </div>
                            </div>

                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: `${deliveryPercent}%` }}></div>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </>
    );
}