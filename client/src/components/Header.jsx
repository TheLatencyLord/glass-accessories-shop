import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import './Header.css';

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalQuantity());

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🔵</span>
          Glass & Accessories
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/admin/login" className="admin-link">
            Admin
          </Link>
        </nav>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}
