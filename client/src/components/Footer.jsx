import React from 'react';
import './Footer.css';

export default function Footer() {
  const whatsappNumber = '919717982082';
  const whatsappMessage = encodeURIComponent('Hi! I am interested in Ankit Mobile Armor wholesale products and rates.');

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🛡️ Ankit Mobile Armor</h3>
          <p>
            India's trusted wholesale specialist for premium mobile tempered glass and accessories. 
            Serving retailers, dealers, and online sellers with competitive wholesale rates.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <strong>📞 WhatsApp:</strong>{' '}
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}>
              +91-9717982082 (Chat Now)
            </a>
          </p>
          <p>
            <strong>📧 Email:</strong>{' '}
            <a href="mailto:srivastavaankit657@gmail.com">
              srivastavaankit657@gmail.com
            </a>
          </p>
          <p>
            <strong>📍 Address:</strong><br/>
            Shop No.10, 13/5, Mahajalan Plaza<br/>
            Karol Bagh, New Delhi-110005
          </p>
          <p className="wholesale-highlight">
            💰 <strong>WHOLESALE SPECIALIST</strong><br/>
            5% - 15% Bulk Discounts Available
          </p>
        </div>

        <div className="footer-section">
          <h3>Wholesale Benefits</h3>
          <ul>
            <li>✅ Competitive wholesale rates</li>
            <li>✅ Bulk order discounts</li>
            <li>✅ Pan-India fast shipping</li>
            <li>✅ Dedicated support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Ankit Mobile Armor. All rights reserved.</p>
      </div>
    </footer>
  );
}
