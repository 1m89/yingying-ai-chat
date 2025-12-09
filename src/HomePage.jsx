// src/HomePage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const [travelerName, setTravelerName] = useState('');
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('travelerName') || '';
    setTravelerName(name);
  }, []);

  const displayName = travelerName || '旅人';

  const handleWorldClick = () => {
    navigate('/gate');
  };

  return (
    <div className="home-shell">
      {/* 背景柔光层 */}
      <div className="home-bg-layer" />
      
      {/* 装饰星星 */}
      <div className="home-stars">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="home-star" />
        ))}
      </div>
      
      {/* 浮动云朵 */}
      <div className="home-cloud home-cloud-1" />
      <div className="home-cloud home-cloud-2" />

      {/* 固定尺寸的"画布" */}
      <main className="home-map">
        {/* 左上：公告栏 */}
        <button
          type="button"
          className="home-board"
          onClick={() => navigate('/notifications')}
        >
          📋 公告栏
        </button>

        {/* 中偏右：开始 / 继续旅程（紫色漩涡） */}
        <button
          type="button"
          className="home-node home-node-world"
          onClick={handleWorldClick}
        >
          <div className="home-world-circle">
            <div className="home-world-spiral">
              <div className="home-world-center-dot" />
            </div>
          </div>
          <div className="home-node-label">
            <div className="home-node-main">开始 / 继续旅程</div>
            <div className="home-node-sub">踏入未知的世界</div>
          </div>
        </button>

        {/* 左中：工坊 */}
        <button
          type="button"
          className="home-node home-node-workshop"
          onClick={() => navigate('/role/new')}
        >
          <div className="home-house-shape workshop">
            <div className="home-house-window left" />
            <div className="home-house-window right" />
          </div>
          <div className="home-node-label">
            <div className="home-node-main">🛠️ 工坊</div>
            <div className="home-node-sub">在这里写下你的角色与设定</div>
          </div>
        </button>

        {/* 右下：小屋 */}
        <button
          type="button"
          className="home-node home-node-room"
          onClick={() => navigate('/me')}
        >
          {!imgError ? (
            <img
              src="/assets/room-house.png"
              alt="小屋"
              className="home-house-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="home-house-fallback">
              <div className="home-house-fallback-roof" />
              <div className="home-house-fallback-body" />
            </div>
          )}
          <div className="home-node-label">
            <div className="home-node-main">🏠 小屋</div>
            <div className="home-node-sub">
              {displayName} 的房间，放着你喜欢的角色与旅程
            </div>
          </div>
        </button>
      </main>

      {/* 右下角：测试版提示 */}
      <div className="home-footer-hint">
        ✨ 测试版 · 一切还在慢慢长成中
      </div>
    </div>
  );
}