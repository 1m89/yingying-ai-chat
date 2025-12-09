// src/WelcomePage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

export default function WelcomePage() {
  const [name, setName] = useState('');
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 轻微延迟，让卡片有个“浮现”的感觉
    const timer = setTimeout(() => setShowCard(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    localStorage.setItem('travelerName', trimmed);
    navigate('/home');
  };

  return (
    <div className="welcome-page">
      {/* 背景浮动色块 */}
      <div className="welcome-orb orb-1" />
      <div className="welcome-orb orb-2" />
      <div className="welcome-orb orb-3" />

      <div className={`welcome-card ${showCard ? 'welcome-card--show' : ''}`}>
        <div className="welcome-header-bar">
          <div className="welcome-header-shine" />
          <h1 className="welcome-title">欢迎来到 · 萤梦间</h1>
        </div>

        <p className="welcome-text">
          这里不只是聊天，更像一个可以暂时离开现实、走进不同故事的小世界。
        </p>

        <p className="welcome-text">
          你可以遇见、创造、扮演任何角色，让他们陪你走很长的故事。
        </p>

        <form onSubmit={handleEnter} className="welcome-form">
          <input
            className="welcome-input"
            placeholder="在踏进去之前，先给自己起一个在这里使用的名字："
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="welcome-button">
            进入
          </button>
        </form>

        <p className="welcome-hint">
          （以后可以在「小屋」里修改这个名字。）
        </p>
      </div>
    </div>
  );
}