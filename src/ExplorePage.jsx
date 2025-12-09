// src/ExplorePage.jsx
import { useNavigate } from 'react-router-dom';
import './ExplorePage.css';

const MOCK_ROLES = [
  {
    id: 'gentle-sister',
    name: '树洞系温柔姐姐',
    tags: ['温柔', '治愈', '现代'],
    desc: '像黄昏一样柔和的陪伴型角色，适合倾诉、发泄情绪、慢慢整理思绪。',
  },
  {
    id: 'tsundere-catgirl',
    name: '傲娇猫娘',
    tags: ['傲娇', '活泼', '二次元'],
    desc: '典型傲娇系小猫咪，嘴上嫌弃、行动真香，适合轻度恋爱向互动。',
  },
  {
    id: 'cool-mentor',
    name: '冷静学霸导师',
    tags: ['学术', '冷静', '现代'],
    desc: '擅长把复杂问题拆开讲清楚，适合学习、科研、技术、论文相关讨论。',
  },
  {
    id: 'sleep-anchor',
    name: '晚安助眠主播',
    tags: ['温柔', '助眠'],
    desc: '语气超柔和的睡前陪伴向角色，可以帮你回顾一天、做情绪收尾。',
  },
];

export default function ExplorePage() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/chat/${role.id}`);
  };

  return (
    <div className="explore-shell">
      <div className="explore-bg-layer" />

      {/* 返回世界入口 */}
      <button
        type="button"
        className="explore-back"
        onClick={() => navigate('/gate')}
      >
        ← 返回世界入口
      </button>

      <header className="explore-header">
        <div className="explore-title">选择一个角色，开启新的旅程</div>
        <p className="explore-sub">
          这些卡片像在梦里慢慢飘着，你可以左右滑动，挑一个当今天的起点。
        </p>
      </header>

      <main className="explore-main">
        <div className="explore-strip">
          {MOCK_ROLES.map((role, index) => (
            <article
              key={role.id}
              className={`explore-card card-${index + 1}`}
              onClick={() => handleSelect(role)}
            >
              <div className="explore-card-cover">
                <div className="explore-card-initial">
                  {role.name.charAt(0)}
                </div>
              </div>

              <div className="explore-card-body">
                <h3 className="explore-card-name">{role.name}</h3>
                <div className="explore-card-tags">
                  {role.tags.map((t) => (
                    <span key={t} className="explore-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="explore-card-desc">{role.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}