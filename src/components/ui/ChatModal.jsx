import React, { useState } from 'react';

const demoReplies = [
  "Hello! How can I help you today?",
  "Our courses are designed for all skill levels.",
  "You can enroll anytime—just fill out the form!",
  "For pricing, check the Pricing page in the menu.",
  "Let me know if you have any other questions!"
];

function ChatModal({ show, onClose }) {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: demoReplies[0] }
  ]);
  const [input, setInput] = useState('');
  const [replyIdx, setReplyIdx] = useState(1);

  const sendMessage = e => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { sender: 'ai', text: demoReplies[replyIdx % demoReplies.length] }
      ]);
      setReplyIdx(idx => idx + 1);
    }, 700);
    setInput('');
  };

  if (!show) {
    console.log('ChatModal not shown');
    return null;
  }
  console.log('ChatModal shown');
  return (
    <div className="chat-modal-overlay" style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.18)',zIndex:9999}}>
      <div className="chat-modal" style={{position:'fixed',bottom:'100px',right:'40px',width:'340px',background:'#fff',borderRadius:'18px',boxShadow:'0 8px 32px rgba(25,118,210,0.18)',padding:'0',zIndex:10000}}>
        <div style={{background:'#1976d2',color:'#fff',borderTopLeftRadius:'18px',borderTopRightRadius:'18px',padding:'16px',fontWeight:'bold',fontSize:'1.1rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          AI Chat Assistant
          <button className="btn btn-sm btn-light" style={{marginLeft:'8px'}} onClick={onClose}>×</button>
        </div>
        <div style={{height:'260px',overflowY:'auto',padding:'16px',background:'#f8fafc'}}>
          {messages.map((msg, i) => (
            <div key={i} style={{marginBottom:'12px',textAlign:msg.sender==='user'?'right':'left'}}>
              <span style={{display:'inline-block',background:msg.sender==='user'?'#1976d2':'#e3f0ff',color:msg.sender==='user'?'#fff':'#222',borderRadius:'12px',padding:'8px 14px',maxWidth:'80%',fontSize:'1rem'}}>{msg.text}</span>
            </div>
          ))}
        </div>
        <form style={{display:'flex',borderTop:'1px solid #eee',padding:'12px'}} onSubmit={sendMessage}>
          <input
            type="text"
            className="form-control"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{marginRight:'8px'}}
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatModal;
