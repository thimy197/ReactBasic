import { useEffect, useState } from 'react';
import { CheckoutHeader } from './CheckoutHeader';
import './Checkout.css';
import axios from 'axios';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';

export function Checkout({ carts }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState([]);
    useEffect(() => {
        const fetchDelivery = async () => {
            try {
                const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
                setDeliveryOptions(response.data);

                const paymentRes = await axios.get("/api/payment-summary");
                setPaymentSummary(paymentRes.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchDelivery();
    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicons/cart-favicon.png" />
            <title>Checkout</title>

            <CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary carts={carts} deliveryOptions={deliveryOptions} />
                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    );
}