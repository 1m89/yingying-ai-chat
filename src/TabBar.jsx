// src/components/TabBar.jsx
import { NavLink } from 'react-router-dom';
import './TabBar.css';

function TabBar() {
  return (
    <nav className="tabbar">
      <NavLink to="/" className="tabbar-item">
        <span className="tabbar-icon">🏠</span>
        <span className="tabbar-label">首页</span>
      </NavLink>
      <NavLink to="/square" className="tabbar-item">
        <span className="tabbar-icon">🎭</span>
        <span className="tabbar-label">角色</span>
      </NavLink>
      <NavLink to="/notifications" className="tabbar-item">
        <span className="tabbar-icon">🔔</span>
        <span className="tabbar-label">消息</span>
      </NavLink>
      <NavLink to="/me" className="tabbar-item">
        <span className="tabbar-icon">👤</span>
        <span className="tabbar-label">我的</span>
      </NavLink>
    </nav>
  );
}

export default TabBar;