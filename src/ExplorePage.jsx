// src/ExplorePage.jsx
import { useNavigate } from 'react-router-dom';
import './ExplorePage.css';

const MOCK_ROLES = [
  {
    id: 'gentle-sister',
    name: '树洞系温柔姐姐',
    tags: ['温柔', '治愈', '现代'],
    desc: '像黄昏一样柔和的陪伴，适合倾诉与整理思绪',
    color: '#f3c7d4',
  },
  {
    id: 'tsundere-catgirl',
    name: '傲娇猫娘',
    tags: ['傲娇', '活泼', '二次元'],
    desc: '嘴上嫌弃，行动真香的小猫咪',
    color: '#ffd4a3',
  },
  {
    id: 'cool-mentor',
    name: '冷静学霸导师',
    tags: ['学术', '冷静'],
    desc: '擅长把复杂问题拆解清楚',
    color: '#c7d7ff',
  },
  {
    id: 'sleep-anchor',
    name: '晚安助眠主播',
    tags: ['温柔', '助眠'],
    desc: '睡前陪伴，帮你回顾一天',
    color: '#d4c7ff',
  },
];

export default function ExplorePage() {
  const navigate = useNavigate();

  const handleSelect = (roleId) => {
    navigate(`/chat/${roleId}`);
  };

  return (
    <div className="page-container explore-page">
      <button 
        className="back-btn btn-secondary"
        onClick={() => navigate('/gate')}
      >
        ← 返回
      </button>

      <header className="explore-header animate-fadeIn">
        <h1 className="explore-title">选择一个角色</h1>
        <p className="explore-subtitle">开启新的旅程</p>
      </header>

      <div className="explore-grid">
        {MOCK_ROLES.map((role, index) => (
          <article
            key={role.id}
            className="role-card card animate-slideInUp"
            onClick={() => handleSelect(role.id)}
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div 
              className="role-avatar"
              style={{ background: role.color }}
            >
              {role.name.charAt(0)}
            </div>
            <div className="role-info">
              <h3 className="role-name">{role.name}</h3>
              <div className="role-tags">
                {role.tags.map(tag => (
                  <span key={tag} className="role-tag">{tag}</span>
                ))}
              </div>
              <p className="role-desc">{role.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}