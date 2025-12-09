// src/WorldGatePage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorldGatePage.css';

export default function WorldGatePage() {
  const [travelerName, setTravelerName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('travelerName') || '';
    setTravelerName(name);
  }, []);

  const displayName = travelerName || '旅人';

  const handleExplore = () => {
    navigate('/explore');
  };

  const handleContinue = () => {
    // TODO：以后这里接“最近旅程”的真实数据
    navigate('/chat/gentle-sister');
  };

  return (
    <div className="gate-shell">
      <div className="gate-bg-layer" />

      {/* 左上角返回按钮 */}
      <button
        type="button"
        className="gate-back"
        onClick={() => navigate('/home')}
      >
        ← 返回大厅
      </button>

      <header className="gate-header">
        <div className="gate-title">世界入口</div>
        <p className="gate-sub">
          {displayName}，每一扇门之后，都是一段可以慢慢走完的旅程。
        </p>
      </header>

      <main className="gate-main">
        <div className="gate-portal">
          <div className="gate-portal-circle">
            <div className="gate-portal-ring outer" />
            <div className="gate-portal-ring inner" />
          </div>
        </div>

        <section className="gate-options">
          <button
            type="button"
            className="gate-option explore"
            onClick={handleExplore}
          >
            <div className="gate-option-title">开启一段新的旅程</div>
            <div className="gate-option-desc">
              去认识一个还不熟悉的角色，从第一句话开始。
            </div>
          </button>

          <button
            type="button"
            className="gate-option continue"
            onClick={handleContinue}
          >
            <div className="gate-option-title">继续尚未走完的旅程</div>
            <div className="gate-option-desc">
              回到你和某个角色之间，尚未写完的那一章。
            </div>
          </button>
        </section>
      </main>
    </div>
  );
}