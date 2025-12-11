// src/WorldGatePage.jsx
import { useNavigate } from 'react-router-dom';
import './WorldGatePage.css';

export default function WorldGatePage() {
  const navigate = useNavigate();

  return (
    <div className="page-container gate-page">
      <button 
        className="back-btn btn-secondary"
        onClick={() => navigate('/home')}
      >
        ← 返回
      </button>

      <div className="gate-content">
        <header className="gate-header animate-fadeIn">
          <h1 className="gate-title">世界入口</h1>
          <p className="gate-subtitle">
            每一扇门之后，都是一段可以慢慢走完的旅程
          </p>
        </header>

        <div className="gate-portal animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          <div className="portal-glow"></div>
          <div className="portal-ring"></div>
        </div>

        <div className="gate-options">
          <button 
            className="gate-option card animate-slideInUp"
            onClick={() => navigate('/explore')}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="option-icon">✨</div>
            <div className="option-content">
              <h3 className="option-title">开启新旅程</h3>
              <p className="option-desc">认识一个还不熟悉的角色</p>
            </div>
          </button>

          <button 
            className="gate-option card animate-slideInUp"
            onClick={() => navigate('/chat/recent')}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="option-icon">📖</div>
            <div className="option-content">
              <h3 className="option-title">继续旅程</h3>
              <p className="option-desc">回到尚未写完的那一章</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}