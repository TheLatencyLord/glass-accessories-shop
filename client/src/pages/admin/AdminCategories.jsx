import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { useAdminStore } from '../../store/adminStore';
import './AdminCategories.css';

export default function AdminCategories() {
  const navigate = useNavigate();
  const isAuthenticated = useAdminStore(state => state.isAuthenticated);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    icon: '📦',
  });

  useEffect(() => {
    if (!isAuthenticated) navigate('/admin/login');
    fetchCategories();
  }, [isAuthenticated, navigate]);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/admin/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/categories', formData);
      setFormData({ name: '', description: '', icon: '📦' });
      setShowForm(false);
      fetchCategories();
      alert('Category added successfully!');
    } catch (error) {
      alert('Error: ' + error.response?.data?.error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      try {
        await api.delete(`/admin/categories/${id}`);
        fetchCategories();
      } catch (error) {
        alert('Error deleting category');
      }
    }
  };

  return (
    <div className="admin-categories">
      <div className="page-header">
        <h1>🏷️ Manage Categories</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '➕ Add Category'}
        </button>
      </div>

      {showForm && (
        <form className="category-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g., Tempered Glass"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>Icon/Emoji</label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({...formData, icon: e.target.value})}
              maxLength="2"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Category
          </button>
        </form>
      )}

      <div className="categories-grid">
        {categories.map(cat => (
          <div key={cat._id} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(cat._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
