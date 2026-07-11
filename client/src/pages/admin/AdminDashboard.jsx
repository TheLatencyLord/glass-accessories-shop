import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { useAdminStore } from '../../store/adminStore';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const isAuthenticated = useAdminStore(state => state.isAuthenticated);
  const logout = useAdminStore(state => state.logout);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
    fetchStats();
  }, [isAuthenticated, navigate]);

  const fetchStats = async () => {
    try {
      const response = await api.get('/admin/stats/overview');
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>📊 Admin Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>📦 Total Products</h3>
          <p className="stat-number">{stats?.totalProducts || 0}</p>
        </div>
        <div className="stat-card">
          <h3>🏷️ Categories</h3>
          <p className="stat-number">{stats?.totalCategories || 0}</p>
        </div>
        <div className="stat-card">
          <h3>🛒 Total Orders</h3>
          <p className="stat-number">{stats?.totalOrders || 0}</p>
        </div>
        <div className="stat-card">
          <h3>💰 Total Revenue</h3>
          <p className="stat-number">₹{(stats?.totalRevenue || 0).toFixed(0)}</p>
        </div>
      </div>

      <div className="admin-menu">
        <h2>Management</h2>
        <div className="menu-grid">
          <Link to="/admin/products" className="menu-card">
            <span className="icon">📦</span>
            <span>Manage Products</span>
          </Link>
          <Link to="/admin/categories" className="menu-card">
            <span className="icon">🏷️</span>
            <span>Manage Categories</span>
          </Link>
          <Link to="/admin/orders" className="menu-card">
            <span className="icon">🛒</span>
            <span>View Orders</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
