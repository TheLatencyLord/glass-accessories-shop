import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useCartStore } from '../store/cartStore';
import './ProductDetailPage.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [bulkRates, setBulkRates] = useState([]);
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    fetchProduct();
    fetchBulkRates();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const fetchBulkRates = async () => {
    try {
      const response = await api.get('/bulk-pricing');
      if (response.data && response.data.length > 0) {
        setBulkRates(response.data[0].tiers);
      }
    } catch (error) {
      console.error('Error fetching bulk rates:', error);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Product added to cart!');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-section">
          {product.thumbnail ? (
            <img src={product.thumbnail} alt={product.name} />
          ) : (
            <div className="placeholder">📱</div>
          )}
        </div>

        <div className="product-info-section">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          
          <div className="product-meta">
            <p><strong>Category:</strong> {product.categoryName}</p>
            <p><strong>Stock:</strong> {product.stock} units available</p>
            <p><strong>Price:</strong> <span className="price">₹{product.price}</span></p>
          </div>

          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="specifications">
              <h3>Specifications</h3>
              {Object.entries(product.specifications).map(([key, value]) => (
                <p key={key}><strong>{key}:</strong> {value}</p>
              ))}
            </div>
          )}

          <div className="add-to-cart-section">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            />
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="contact-section">
            <a href="https://wa.me/919876543210" className="btn btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {bulkRates.length > 0 && (
        <div className="bulk-pricing-section">
          <h2>💰 Bulk Pricing</h2>
          <table className="bulk-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {bulkRates.map((rate, idx) => (
                <tr key={idx}>
                  <td>{rate.minQuantity} - {rate.maxQuantity || 'above'}</td>
                  <td>{rate.discountPercentage}% off</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
