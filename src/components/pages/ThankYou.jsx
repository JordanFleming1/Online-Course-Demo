import React from "react";

function ThankYou() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h2 className="mb-4" style={{color:'#43a047', fontWeight:'bold'}}>Thank You!</h2>
              <p className="lead">Your demo payment was successful.</p>
              <p className="text-muted">No real transaction occurred. This is a demo checkout for preview purposes only.</p>
              <a href="/" className="btn btn-primary mt-3">Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
