// src/App.js
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import WorldGatePage from './WorldGatePage';
import ExplorePage from './ExplorePage';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import SquarePage from './CharacterSquare';
import ChatPage from './ChatPage';
import RoleCreatePage from './RoleCreatePage';
import RoleDetailPage from './RoleDetailPage';
import SearchPage from './SearchPage';
import NotificationsPage from './NotificationsPage';
import UserCenterPage from './UserCenterPage';

import './App.css';

function AppLayout() {
  const location = useLocation();

  return (
    <div className="app-root">
      <div className="app-main">
        <Routes>
          {/* 默认先进欢迎页 */}
          <Route path="/" element={<WelcomePage />} />
          {/* 欢迎页进入的首页 */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/square" element={<SquarePage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/role/new" element={<RoleCreatePage />} />
          <Route path="/role/:id" element={<RoleDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/me" element={<UserCenterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/gate" element={<WorldGatePage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;