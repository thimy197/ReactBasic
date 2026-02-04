import { OrderHeader } from './OrderHeader';
import { OrderDetailsGrid } from './OrderDetailsGrid'

export function OrderGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.length > 0 &&
        orders.map((order) => (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            <OrderDetailsGrid order={order} />
          </div>
        ))
      }
    </div>
  );
}