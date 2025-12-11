// src/ChatPage.jsx
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChatPage.css';

export default function ChatPage() {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // 模拟角色信息
  const roleInfo = {
    name: '温柔姐姐',
    avatar: '👧',
  };

  useEffect(() => {
    // 初始消息
    setMessages([
      {
        id: 1,
        role: 'assistant',
        content: '你好呀，有什么想聊的吗？',
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // TODO: 这里接你的AI API
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: '这是AI的回复～（待接入真实API）',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="chat-page">
      {/* 顶栏 */}
      <header className="chat-header">
        <button 
          className="chat-back"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
        <div className="chat-role-info">
          <span className="chat-avatar">{roleInfo.avatar}</span>
          <span className="chat-role-name">{roleInfo.name}</span>
        </div>
        <button className="chat-menu">⋮</button>
      </header>

      {/* 消息列表 */}
      <main className="chat-messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`message ${msg.role === 'user' ? 'message-user' : 'message-ai'}`}
          >
            <div className="message-bubble">
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message message-ai">
            <div className="message-bubble typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* 输入框 */}
      <form className="chat-input-form" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-input"
          placeholder="说点什么..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="chat-send-btn"
          disabled={!input.trim() || isLoading}
        >
          发送
        </button>
      </form>
    </div>
  );
}