import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../api/axios';
import './ProductsPage.css';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [searchParams]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const categoryId = searchParams.get('category');
      const sort = searchParams.get('sort') || 'newest';
      
      const url = categoryId
        ? `/products?category=${categoryId}&sort=${sort}`
        : `/products?sort=${sort}`;

      const response = await api.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="products-page">
      <h1>Products</h1>
      
      <div className="products-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="filter-group">
            <h3>Categories</h3>
            <Link to="/products" className={!searchParams.get('category') ? 'active' : ''}>
              All Products
            </Link>
            {categories.map(cat => (
              <Link
                key={cat._id}
                to={`/products?category=${cat._id}`}
                className={searchParams.get('category') === cat._id ? 'active' : ''}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="products-main">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length === 0 ? (
            <p>No products found</p>
          ) : (
            <div className="products-grid">
              {products.map(product => (
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
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">₹{product.price}</p>
                    <p className="stock">Stock: {product.stock}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
