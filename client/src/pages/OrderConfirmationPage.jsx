import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
import './OrderConfirmationPage.css';

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const response = await api.get(`/orders/${orderId}`);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

  if (!order) {
    return <div className="loading">Loading order details...</div>;
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I have placed order ${orderId} and would like to discuss further.`
  );

  return (
    <div className="order-confirmation-page">
      <div className="confirmation-container">
        <div className="success-icon">✅</div>
        
        <h1>Order Confirmed!</h1>
        <p className="order-id">Order ID: {order.orderId}</p>

        <div className="order-details">
          <h2>Order Details</h2>
          
          <div className="detail-section">
            <h3>Items Ordered</h3>
            {order.items.map((item, idx) => (
              <div key={idx} className="item">
                <span>{item.productName} x{item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="detail-section">
            <h3>Payment Summary</h3>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>₹{order.summary.subtotal.toFixed(2)}</span>
            </div>
            {order.summary.isBulkOrder && (
              <div className="summary-item discount">
                <span>Bulk Discount ({order.summary.bulkDiscountPercentage}%):</span>
                <span>-₹{order.summary.discount.toFixed(2)}</span>
              </div>
            )}
            <div className="summary-item">
              <span>Tax (18%):</span>
              <span>₹{order.summary.tax.toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <span>Total Amount:</span>
              <span>₹{order.summary.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Shipping Address</h3>
            <p>{order.customer.name}</p>
            {order.customer.company && <p>{order.customer.company}</p>}
            <p>{order.customer.address.street}</p>
            <p>{order.customer.address.city}, {order.customer.address.state} {order.customer.address.zip}</p>
            <p>Phone: {order.customer.phone}</p>
            <p>Email: {order.customer.email}</p>
          </div>
        </div>

        <div className="next-steps">
          <h3>What's Next?</h3>
          <ol>
            <li>We will confirm your order via WhatsApp/Email within 2 hours</li>
            <li>Payment details will be shared with you</li>
            <li>Your order will be prepared and shipped</li>
            <li>You will receive tracking information</li>
          </ol>
        </div>

        <div className="action-buttons">
          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            📞 Contact via WhatsApp
          </a>
          <Link to="/products" className="btn btn-secondary">
            Continue Shopping
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>

        <div className="thank-you">
          <p>Thank you for your order! 🙏</p>
        </div>
      </div>
    </div>
  );
}
