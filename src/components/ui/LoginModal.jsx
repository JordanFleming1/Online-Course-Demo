import { useState } from 'react';
import { toast } from 'react-toastify';

function LoginModal() {
  const [show, setShow] = useState(false);
  return (
    <>
  <button className="btn btn-outline-light me-2" style={{fontWeight:'bold'}} onClick={() => setShow(true)}>Login / Signup</button>
      {show && (
        <div className="modal fade show" style={{display:'block'}} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Demo Login / Signup</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control mb-2" placeholder="Username" />
                <input type="password" className="form-control mb-2" placeholder="Password" />
                <button className="btn btn-primary w-100" onClick={() => {
                  toast.success('✅ Login successful! Welcome back.', {
                    position: 'top-center',
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}>Login</button>
                <div className="text-center mt-2">
                  <small>Demo only. No real authentication.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
