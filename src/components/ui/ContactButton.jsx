import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context';

const questions = [
  {
    q: 'How do I enroll in a course?',
    a: 'Click the Enroll link in the navigation bar and fill out the form to sign up for your chosen course.'
  },
  {
    q: 'Is this a real course platform?',
    a: 'This is a demo site to showcase features and design for potential buyers. No real courses are provided.'
  },
  {
    q: 'Can I customize this platform?',
    a: 'Yes! The code is fully customizable to fit your needs and branding.'
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes, every course comes with a certificate of completion.'
  },
  {
    q: 'Who are the instructors?',
    a: 'Our instructors are industry professionals and certified experts.'
  }
];

function ContactButton() {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  function handleQuestion(idx) {
    setChat(c => [
      ...c,
      { type: 'user', text: questions[idx].q },
      { type: 'bot', text: questions[idx].a }
    ]);
  }

  function handleReset() {
    setChat([]);
    setOpen(false);
  }

  return (
    <>
      <button
        className="contact-float-btn"
        title="Chat with us"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 9999,
          background: darkMode ? '#222' : '#1976d2',
          color: '#fff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: darkMode ? '0 4px 16px rgba(40,40,40,0.18)' : '0 4px 16px rgba(25,118,210,0.18)',
          fontSize: '1.2rem',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        <span role="img" aria-label="Contact">💬</span>
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: !fullscreen ? '80px' : 0,
            right: !fullscreen ? '32px' : 0,
            width: fullscreen ? '100vw' : '280px',
            height: fullscreen ? '100vh' : '320px',
            background: darkMode ? '#222' : '#fff',
            borderRadius: fullscreen ? 0 : '14px',
            padding: '0',
            overflow: 'hidden',
            transition: 'all 0.3s',
            cursor: 'default',
            zIndex: fullscreen ? 99999 : 10000,
            color: darkMode ? '#eee' : '#222',
            boxShadow: darkMode ? '0 4px 24px rgba(40,40,40,0.15)' : '0 4px 24px rgba(25,118,210,0.15)',
          }}
        >
          <div
            style={{
              background: darkMode ? '#333' : '#1976d2',
              color: '#fff',
              padding:'12px 16px',
              borderTopLeftRadius:fullscreen?0:'18px',
              borderTopRightRadius:fullscreen?0:'18px',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}
          >
            <span style={{fontWeight:'bold'}}>Quick Chat</span>
            <div style={{display:'flex',gap:'8px',alignItems:'center'}}>
              <button
                type="button"
                className="btn btn-light btn-sm me-2"
                aria-label={fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                onClick={() => setFullscreen(f => !f)}
                style={{fontWeight:'bold',fontSize:'1.1em',borderRadius:'8px'}}
              >
                {fullscreen ? '⤢' : '⤢'}
              </button>
              {/* Dark mode toggle removed, now uses global theme */}
              {!fullscreen && (
                <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleReset}></button>
              )}
            </div>
          </div>
          <div style={{
            padding:'12px',
            maxHeight:fullscreen ? 'calc(100vh - 320px)' : '260px',
            overflowY:'auto',
            background: darkMode ? '#222' : '#f8fafc',
            height:fullscreen ? 'calc(100vh - 320px)' : 'auto',
          }}>
            {chat.length === 0 && (
              <div style={{marginBottom:'10px',fontSize:'1em'}}>Select a question below to get an answer:</div>
            )}
            {chat.map((msg, idx) => (
              <div key={idx} style={{marginBottom:'8px',textAlign:msg.type==='user'?'right':'left'}}>
                <span style={{
                  display:'inline-block',
                  background: msg.type==='user'?'#1976d2':'#e3f0ff',
                  color: msg.type==='user'?'#fff':'#1976d2',
                  borderRadius:'12px',
                  padding:'7px 12px',
                  maxWidth:'80%',
                  fontSize:'0.98em',
                  boxShadow: msg.type==='user'?'0 2px 8px rgba(25,118,210,0.10)':'none',
                }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div style={{
            padding:'12px',
            borderTop:'1px solid #eee',
            background: darkMode ? '#222' : '#fff',
            maxHeight: fullscreen ? 'calc(100vh - 180px)' : '220px',
            overflowY: 'auto',
          }}>
            <div style={{fontWeight:'bold',marginBottom:'8px',fontSize:'0.98em'}}>Questions:</div>
            <div style={{display:'flex',flexDirection:'column',gap:'14px',marginTop:'6px'}}>
              {questions.map((item, idx) => (
                <button
                  key={idx}
                  className="btn btn-outline-primary text-start"
                  style={{
                    borderRadius:'10px',
                    fontSize:'0.92em',
                    fontWeight:'bold',
                    padding:'7px 10px',
                    letterSpacing:'0.3px',
                    lineHeight:'1.2',
                    boxShadow:'0 2px 8px rgba(25,118,210,0.07)',
                  }}
                  onClick={() => handleQuestion(idx)}
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactButton;
