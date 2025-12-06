import { Link } from 'react-router-dom';
import './CharacterSquare.css';

function CharacterSquare() {
  // 示例角色数据
  const characters = [
    { id: 1, name: '温柔学姐', tags: ['温柔', '成熟', '体贴'], avatar: '👩‍🎓' },
    { id: 2, name: '傲娇同桌', tags: ['傲娇', '可爱', '校园'], avatar: '👧' },
    { id: 3, name: '霸道总裁', tags: ['霸道', '商战', '都市'], avatar: '👨‍💼' },
    { id: 4, name: '古风少侠', tags: ['古风', '武侠', '江湖'], avatar: '🥋' },
  ];

  return (
    <div className="square-container">
      <header className="square-header">
        <h1>💛 角色广场 💛</h1>
        <Link to="/chat" className="to-chat-btn">💬 进入对话</Link>
      </header>

      <div className="filters">
        <button className="filter-btn active">全部</button>
        <button className="filter-btn">温柔</button>
        <button className="filter-btn">傲娇</button>
        <button className="filter-btn">古风</button>
        <button className="filter-btn">现代</button>
      </div>

      <div className="character-grid">
        {characters.map(char => (
          <div key={char.id} className="character-card">
            <div className="character-avatar">{char.avatar}</div>
            <h3>{char.name}</h3>
            <div className="character-tags">
              {char.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <Link to="/chat" className="chat-btn">开始对话</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterSquare;