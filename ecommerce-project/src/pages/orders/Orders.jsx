import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { formatMoney } from '../../utils/money.js';
import { formatDateFormat, M_D_FORMAT } from '../../utils/StringCommon.js';
import { Header } from '../../Components/Header'
import { Link } from 'react-router';
import './Orders.css';
import BuyAgainImg from '../../assets/images/icons/buy-again.png';

export function Orders({ carts }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/orders?expand=products");
        setOrders(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="images/favicons/orders-favicon.png" />
      <title>Orders</title>
      <Header carts={carts} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.length > 0 &&
            orders.map((order) => (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{formatDateFormat(order.orderTimeMs, M_D_FORMAT)}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

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
                        <Link to="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </Link>
                      </div>
                    </Fragment>
                  ))}

                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  );
}