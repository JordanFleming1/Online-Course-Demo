import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LoginModal } from '../ui';
import { ThemeContext } from '../../context';

const navItems = [
  {to: '/', label: 'Home'},
  {to: '/about', label: 'About'},
  {to: '/courses', label: 'Courses'},
  {to: '/enroll', label: 'Enroll'},
  {to: '/dashboard', label: 'Dashboard'},
  {to: '/reviews', label: 'Reviews'},
  {to: '/faq', label: 'FAQ'},
  {to: '/pricing', label: 'Pricing'}
];

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggle() {
    setMenuOpen(open => !open);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{
      minHeight:'64px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100vw',
      background: darkMode ? '#23272a' : '#1976d2',
      boxShadow: menuOpen ? '0 8px 32px rgba(25,118,210,0.18)' : '0 4px 16px rgba(25,118,210,0.10)',
      transition:'box-shadow 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div className="container-fluid d-flex align-items-center justify-content-center" style={{height:'64px',width:'100vw'}}>
        <div className="d-flex align-items-center" style={{height:'100%'}}>
          <Link className="navbar-brand d-flex align-items-center justify-content-center" to="/" style={{fontWeight:'bold',letterSpacing:'1.5px',fontSize:'1.25rem',textShadow:'0 1px 4px #1565c0',height:'100%'}}>Online Course</Link>
        </div>
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="navbarNav" style={{
          borderRadius:'0 0 18px 18px',
          background: darkMode ? '#23272a' : '#1976d2',
          boxShadow: menuOpen ? '0 4px 24px rgba(25,118,210,0.12)' : undefined,
          position: menuOpen ? 'absolute' : undefined,
          top: menuOpen ? '64px' : undefined,
          left: 0,
          width: '100vw',
          zIndex: menuOpen ? 9999 : undefined,
          transition: 'background 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
          display: menuOpen ? 'flex' : undefined,
          flexDirection: menuOpen ? 'column' : undefined,
          alignItems: menuOpen ? 'center' : undefined,
          justifyContent: menuOpen ? 'center' : undefined,
          padding: menuOpen ? '32px 0 24px 0' : undefined,
        }}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100" style={{
            height: menuOpen ? 'auto' : '64px',
            display: menuOpen ? 'flex' : 'flex',
            flexDirection: menuOpen ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            background: menuOpen ? (darkMode ? '#23272a' : '#1976d2') : undefined,
            borderRadius: menuOpen ? '18px' : undefined,
            boxShadow: menuOpen ? '0 4px 24px rgba(25,118,210,0.12)' : undefined,
            width: menuOpen ? '90vw' : undefined,
            margin: menuOpen ? '0 auto' : undefined,
            padding: menuOpen ? '16px 0' : undefined,
            transition: menuOpen ? 'background 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.4s cubic-bezier(0.4,0,0.2,1)' : undefined,
          }}>
            {navItems.map((item) => (
              <li className="nav-item d-flex align-items-center justify-content-center" key={item.to} style={{height:'100%',width: menuOpen ? '100%' : undefined}}>
                <NavLink
                  className={({isActive}) =>
                    'nav-link px-3 fw-semibold text-center' + (isActive ? ' active' : '')
                  }
                  to={item.to}
                  style={{
                    letterSpacing:'1px',
                    fontSize:'1.08rem',
                    color:'#fff',
                    textShadow:'0 1px 4px #1565c0',
                    transition:'color 0.3s cubic-bezier(0.4,0,0.2,1)',
                    height:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: menuOpen ? '100%' : undefined,
                  }}
                  onClick={handleNavClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center justify-content-center" style={{height:'100%',width: menuOpen ? '100%' : undefined}}>
              <div style={{width: menuOpen ? '100%' : 'auto',display:'flex',flexDirection: menuOpen ? 'column' : 'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
                <LoginModal />
                <button
                  className={darkMode ? 'btn btn-dark btn-sm ms-2' : 'btn btn-light btn-sm ms-2'}
                  aria-label="Toggle dark mode"
                  onClick={() => setDarkMode(d => !d)}
                  style={{fontWeight:'bold',fontSize:'1.1em',borderRadius:'8px',width: menuOpen ? '90%' : 'auto',transition:'background 0.3s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)'}}
                >
                  {darkMode ? '🌙' : '☀️'}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
