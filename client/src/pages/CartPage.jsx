import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useCartStore } from '../store/cartStore';
import './CartPage.css';

export default function CartPage() {
  const navigate = useNavigate();
  const items = useCartStore(state => state.items);
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const [bulkInfo, setBulkInfo] = useState({ discount: 0, isBulk: false });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * (bulkInfo.discount / 100);
  const tax = (subtotal - discount) * 0.18;
  const total = subtotal - discount + tax;
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    calculateBulkDiscount();
  }, [items]);

  const calculateBulkDiscount = async () => {
    try {
      const response = await api.get('/bulk-pricing');
      if (response.data && response.data.length > 0) {
        const tiers = response.data[0].tiers;
        for (const tier of tiers) {
          if (totalQuantity >= tier.minQuantity && (!tier.maxQuantity || totalQuantity <= tier.maxQuantity)) {
            setBulkInfo({ discount: tier.discountPercentage, isBulk: true });
            return;
          }
        }
      }
      setBulkInfo({ discount: 0, isBulk: false });
    } catch (error) {
      console.error('Error fetching bulk rates:', error);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="placeholder">📱</div>
                )}
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
              <div className="item-quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="item-total">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          {bulkInfo.isBulk && (
            <div className="bulk-discount-badge">
              🎉 Bulk Discount Applied: {bulkInfo.discount}%
            </div>
          )}

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          {bulkInfo.isBulk && (
            <div className="summary-row discount">
              <span>Bulk Discount ({bulkInfo.discount}%):</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
          )}

          <div className="summary-row">
            <span>Tax (18%):</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            className="btn btn-primary checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>

          <Link to="/products" className="btn btn-secondary continue-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
