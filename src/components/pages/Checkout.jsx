import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body">
              <h2 className="mb-4 text-center" style={{color:'#1976d2', fontWeight:'bold'}}>Checkout</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name on Card</label>
                  <input type="text" className="form-control" placeholder="John Doe" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input type="text" className="form-control" placeholder="1234 5678 9012 3456" maxLength={19} />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">Expiry</label>
                    <input type="text" className="form-control" placeholder="MM/YY" maxLength={5} />
                  </div>
                  <div className="col">
                    <label className="form-label">CVC</label>
                    <input type="text" className="form-control" placeholder="123" maxLength={4} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@email.com" />
                </div>
                <button type="button" className="btn btn-success w-100" onClick={() => navigate('/thankyou')}>Pay Now (Demo)</button>
              </form>
              <div className="mt-3 text-center text-muted" style={{fontSize:'0.95em'}}>
                <span>No real payment will be processed. This is a demo checkout page.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
