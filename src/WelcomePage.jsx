// src/WelcomePage.jsx - 萤梦间入口（v2.0 高质量版本）
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

export default function WelcomePage() {
  const [name, setName] = useState('');
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 页面加载后延迟显示内容，营造"梦境浮现"的感觉
    const timer = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    // 保存旅者名到本地（以后会改成真正的登录）
    localStorage.setItem('travelerName', trimmed);
    navigate('/home');
  };

  return (
    <div className="welcome-shell">
      {/* 萤火虫粒子层 */}
      <div className="fireflies-layer">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="firefly"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 梦境光晕层 */}
      <div className="dream-glow dream-glow-1" />
      <div className="dream-glow dream-glow-2" />
      <div className="dream-glow dream-glow-3" />

      {/* 主内容区 */}
      <div className={`welcome-content ${showContent ? 'welcome-content--visible' : ''}`}>
        {/* Logo区域 */}
        <div className="welcome-logo-area">
          <div className="logo-glow-ring" />
          <h1 className="welcome-logo">萤梦间</h1>
          <div className="logo-subtitle">Firefly Dreamscape</div>
        </div>

        {/* 引导文案 */}
        <div className="welcome-description">
          <p className="welcome-desc-line">这里不是现实的延续</p>
          <p className="welcome-desc-line">而是可以暂时逃离、走进无数故事的梦境中转站</p>
        </div>

        {/* 入驻表单 */}
        <div className="welcome-form-container">
          <div className="form-label">在踏入梦境之前，请告诉我们</div>
          
          <form onSubmit={handleEnter} className="welcome-form">
            <div className="input-wrapper">
              <input
                type="text"
                className="welcome-input"
                placeholder="你想在这里被如何称呼？"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              <div className="input-underline" />
            </div>

            <button type="submit" className="welcome-enter-btn" disabled={!name.trim()}>
              <span className="btn-text">进入萤梦间</span>
              <div className="btn-glow" />
            </button>
          </form>

          <div className="welcome-footer-hint">
            这个名字可以在小屋中随时修改
          </div>
        </div>
      </div>

      {/* 版本标识 */}
      <div className="welcome-version">Alpha v0.1.0</div>
    </div>
  );
}