import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context';

function Pricing() {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? '#eee' : '#222';
  const accentColor = darkMode ? '#90caf9' : '#1976d2';
  const cardBg = darkMode ? '#23272a' : '#fff';
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2 className="mb-4 text-center" style={{color: accentColor, fontWeight:'bold'}}>Pricing & Packages</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0" style={{background: cardBg, color: textColor}}>
            <div className="card-body text-center">
              <h5 className="card-title" style={{color: accentColor}}>Starter</h5>
              <h3 className="mb-3" style={{color: textColor}}>$49</h3>
              <ul className="list-unstyled mb-3">
                <li>1 Course Template</li>
                <li>Basic Dashboard</li>
                <li>Email Support</li>
              </ul>
              <button className="btn btn-success" onClick={() => navigate('/checkout')}>Choose Starter</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0" style={{background: cardBg, color: textColor}}>
            <div className="card-body text-center">
              <h5 className="card-title" style={{color: accentColor}}>Pro</h5>
              <h3 className="mb-3" style={{color: textColor}}>$99</h3>
              <ul className="list-unstyled mb-3">
                <li>All Course Templates</li>
                <li>Advanced Dashboard</li>
                <li>Priority Support</li>
                <li>Custom Branding</li>
              </ul>
              <button className="btn btn-primary" onClick={() => navigate('/checkout')}>Choose Pro</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0" style={{background: cardBg, color: textColor}}>
            <div className="card-body text-center">
              <h5 className="card-title" style={{color: accentColor}}>Ultimate</h5>
              <h3 className="mb-3" style={{color: textColor}}>$199</h3>
              <ul className="list-unstyled mb-3">
                <li>Everything in Pro</li>
                <li>Custom Features</li>
                <li>1-on-1 Setup Call</li>
                <li>Lifetime Updates</li>
              </ul>
              <button className="btn btn-dark" onClick={() => navigate('/checkout')}>Choose Ultimate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
