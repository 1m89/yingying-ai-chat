import './theme.css';
// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
import WorldGatePage from './WorldGatePage';
import ExplorePage from './ExplorePage';
import ChatPage from './ChatPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gate" element={<WorldGatePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/chat/:roleId" element={<ChatPage />} />
        {/* 其他路由暂时先不管 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;