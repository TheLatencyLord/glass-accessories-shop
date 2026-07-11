import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import './HomePage.css';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        api.get('/products?sort=newest'),
        api.get('/categories'),
      ]);
      setProducts(productsRes.data.slice(0, 8));
      setCategories(categoriesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="wholesale-badge">🏆 WHOLESALE SPECIALIST</div>
          <h1>🛡️ Ankit Mobile Armor</h1>
          <p>India's Premium Tempered Glass & Mobile Accessories Wholesale Distributor</p>
          <p className="hero-subtext">Serving Retailers | Online Sellers | Bulk Buyers Since Years</p>
          <p className="hero-highlight">💰 WHOLESALE ONLY - Get Best Rates Now!</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Browse Wholesale Catalog
            </Link>
            <a href="https://wa.me/919717982082?text=Hi! I'm interested in wholesale rates for Ankit Mobile Armor products. Please provide details." className="btn btn-secondary">
              Get Wholesale Quote
            </a>
          </div>
        </div>
      </section>

      {/* Wholesale Highlight Banner */}
      <section className="wholesale-banner">
        <div className="wholesale-content">
          <h2>🎯 Wholesale Specialist</h2>
          <p>Get the best wholesale rates for bulk orders starting from just 10 units. Direct supplier to retailers, dealers, and online sellers.</p>
          <div className="wholesale-benefits">
            <div className="benefit">
              <span className="icon">📦</span>
              <span>Bulk Discounts</span>
              <span className="description">5% - 15% off on bulk orders</span>
            </div>
            <div className="benefit">
              <span className="icon">⚡</span>
              <span>Fast Delivery</span>
              <span className="description">Pan-India shipping available</span>
            </div>
            <div className="benefit">
              <span className="icon">💰</span>
              <span>Best Pricing</span>
              <span className="description">Competitive wholesale rates</span>
            </div>
            <div className="benefit">
              <span className="icon">🤝</span>
              <span>Support</span>
              <span className="description">Dedicated wholesale support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="categories-section">
          <h2>Browse Categories</h2>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link
                key={cat._id}
                to={`/products?category=${cat._id}`}
                className="category-card"
              >
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <h3>💰 Bulk Order Discounts</h3>
          <p>Get special rates on bulk orders - 5% to 15% discount</p>
        </div>
        <div className="feature-item">
          <h3>📞 WhatsApp Support</h3>
          <p>Direct contact for inquiries and custom orders</p>
        </div>
        <div className="feature-item">
          <h3>📦 Fast Delivery</h3>
          <p>Quick shipping across India</p>
        </div>
        <div className="feature-item">
          <h3>✅ Quality Assured</h3>
          <p>Premium products with warranty</p>
        </div>
      </section>

      {/* Latest Products */}
      {products.length > 0 && (
        <section className="latest-products">
          <h2>Latest Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="product-card"
              >
                <div className="product-image">
                  {product.thumbnail ? (
                    <img src={product.thumbnail} alt={product.name} />
                  ) : (
                    <div className="placeholder">📱</div>
                  )}
                </div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                <span className="badge">{product.categoryName}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready for Wholesale?</h2>
        <p>Contact us for custom pricing, bulk orders, and wholesale partnerships</p>
        <a href="https://wa.me/919717982082?text=Hi! I'm interested in wholesale rates for Ankit Mobile Armor products. Please provide details." className="btn btn-primary">
          Get Wholesale Quote
        </a>
      </section>
    </div>
  );
}
