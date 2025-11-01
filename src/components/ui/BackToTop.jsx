
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary"
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            zIndex: 1000,
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default BackToTop;
