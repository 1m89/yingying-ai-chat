import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': 'AIzaSyApC5zcBgCNd4I0qt36LWMJgFDweBvgXuQ'
        },
        body: JSON.stringify({
          contents: [...messages, userMessage].map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          }))
        })
      });

      const data = await response.json();
      const aiMessage = { 
        role: 'assistant', 
        content: data.candidates[0].content.parts[0].text 
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('错误:', error);
      const errorMessage = {
        role: 'assistant',
        content: '😢 抱歉，出了点问题！可能是网络不稳定或者API额度用完了。请稍后再试~'
      };
      setMessages(prev => [...prev, errorMessage]);
    }
    
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <h1>💛 颖颖的AI聊天平台 💛</h1>
        <Link to="/square" className="clear-btn">🏠 角色广场</Link>
        <button 
          className="clear-btn" 
          style={{right: '160px'}}
          onClick={() => setMessages([])}
        >
          🗑️ 清空对话
        </button>
        
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={msg.role}>
              {msg.content}
            </div>
          ))}
          {loading && <div className="loading">克宝正在思考...</div>}
        </div>

        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="和克宝说点什么..."
          />
          <button onClick={sendMessage}>发送</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;